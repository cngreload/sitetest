import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const IranMapScene: React.FC = () =>
{
    const mountRef = useRef<HTMLDivElement>( null );

    useEffect( () =>
    {
        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        const renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setSize( window.innerWidth, window.innerHeight );
        if ( mountRef.current ) mountRef.current.appendChild( renderer.domElement );

        // Add ambient light for visibility
        const ambientLight = new THREE.AmbientLight( 0xffffff, 0.5 ); // Soft white light
        scene.add( ambientLight );

        // Debug helper to confirm rendering
        const axesHelper = new THREE.AxesHelper( 5 ); // Adds axes for orientation
        scene.add( axesHelper );

        // Add Iran map as a texture
        const loader = new THREE.TextureLoader();
        loader.load(
            "/svg/irmap.svg",
            ( texture ) =>
            {
                const geometry = new THREE.PlaneGeometry( 10, 7 ); // Adjust dimensions
                const material = new THREE.MeshBasicMaterial( { map: texture, transparent: true } );
                const plane = new THREE.Mesh( geometry, material );
                plane.position.set( 0, 0, 0 ); // Center in the scene
                scene.add( plane );
            },
            undefined,
            ( error ) =>
            {
                console.error( "Failed to load texture:", error );
            }
        );

        // Camera positioning
        camera.position.set( 0, 0, 20 );
        camera.lookAt( 0, 0, 0 );

        // Lights array
        const lights: THREE.PointLight[] = [];
        const lineCount = 3; // Maximum number of lights existing at the same time
        const usedPaths = new Set<string>();

        // Random path generator
        const getRandom = ( min: number, max: number ) => Math.random() * ( max - min ) + min;

        // Generate random ballistic paths
        const generatePath = () =>
        {
            const startX = getRandom( -5, 5 );
            const startY = getRandom( -3, -2 );
            const endX = getRandom( -5, 5 );
            const endY = getRandom( 2, 3 );
            const midX = ( startX + endX ) / 2 + getRandom( -1, 1 );
            const midY = Math.max( startY, endY ) + getRandom( 1, 3 );
            const pathKey = `${ startX }-${ startY }-${ endX }-${ endY }`;

            if ( !usedPaths.has( pathKey ) )
            {
                usedPaths.add( pathKey );
                return { startX, startY, midX, midY, endX, endY, progress: 0 };
            }
            return null;
        };

        // Create a new light with random path
        const createLight = () =>
        {
            const path = generatePath();
            if ( path )
            {
                const light = new THREE.PointLight( 0xff5722, 1, 5 ); // Orange light
                light.position.set( path.startX, path.startY, 1 ); // Start position
                ( light as any ).path = path;
                scene.add( light );
                lights.push( light );
            }
        };

        // Animation loop
        const animate = () =>
        {
            requestAnimationFrame( animate );

            lights.forEach( ( light, index ) =>
            {
                const path = ( light as any ).path;

                if ( path.progress < 1 )
                {
                    path.progress += 0.01; // Increment progress
                    const t = path.progress;
                    const x = ( 1 - t ) ** 2 * path.startX + 2 * ( 1 - t ) * t * path.midX + t ** 2 * path.endX;
                    const y = ( 1 - t ) ** 2 * path.startY + 2 * ( 1 - t ) * t * path.midY + t ** 2 * path.endY;

                    light.position.set( x, y, 1 );
                } else
                {
                    scene.remove( light ); // Remove light when it lands
                    lights.splice( index, 1 ); // Remove from array
                    usedPaths.delete( `${ path.startX }-${ path.startY }-${ path.endX }-${ path.endY }` ); // Free the path
                }
            } );

            // Maintain three lights at all times
            while ( lights.length < lineCount )
            {
                createLight();
            }

            renderer.render( scene, camera );
        };

        animate();

        // Cleanup on component unmount
        return () =>
        {
            renderer.dispose();
            if ( mountRef.current ) mountRef.current.removeChild( renderer.domElement );
        };
    }, [] );

    return <div ref={ mountRef } style={ { width: "100vw", height: "100vh" } } />;
};

export default IranMapScene;
