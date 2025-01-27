'use client';
// components/ThreeCircleAnimation.tsx
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

interface SvgItem
{
    src: string;
    name: string;
}

const ThreeCircleAnimation: React.FC = () =>
{
    const containerRef = useRef<HTMLDivElement>( null );

    const svgs: SvgItem[] = [
        { src: "/svg/techicons/assembly.svg", name: "Assembly" },
        { src: "/svg/techicons/c.svg", name: "C Language" },
        { src: "/svg/techicons/csharp.svg", name: "C#" },
        { src: "/svg/techicons/laravel.svg", name: "Laravel" },
        { src: "/svg/techicons/php.svg", name: "PHP" },
        { src: "/svg/techicons/python.svg", name: "Python" },
        { src: "/svg/techicons/react.svg", name: "React" },
        { src: "/svg/techicons/vue.svg", name: "Vue" },
    ];

    useEffect( () =>
    {
        const container = containerRef.current;
        if ( !container ) return;

        const isSmallScreen = window.innerWidth <= 768;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, container.offsetWidth / container.offsetHeight, 0.1, 1000 );
        camera.position.z = 50;

        const renderer = new THREE.WebGLRenderer( { alpha: true } );
        renderer.setSize( container.offsetWidth, container.offsetHeight );
        container.appendChild( renderer.domElement );

        const svgMeshes: THREE.Mesh[] = [];
        const circleRadii = [ 2, 4, 6 ];

        const resizeHandler = () =>
        {
            camera.aspect = container.offsetWidth / container.offsetHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( container.offsetWidth, container.offsetHeight );
        };

        const createScene = () =>
        {
            const loader = new THREE.TextureLoader();

            const createPartialCircle = ( radius: number ) =>
            {
                const startAngle = isSmallScreen ? 0 : 0;
                const endAngle = isSmallScreen ? Math.PI / 2 : 2 * Math.PI;
                const curve = new THREE.EllipseCurve(
                    0, 0, radius, radius, startAngle, endAngle, false
                );
                return new THREE.Path( curve.getPoints( 100 ) );
            };

            // Create dashed circle paths
            circleRadii.forEach( ( radius ) =>
            {
                const curve = createPartialCircle( radius );
                const geometry = new THREE.BufferGeometry().setFromPoints( curve.getPoints() );
                const material = new THREE.LineDashedMaterial( {
                    color: 0x000000,
                    dashSize: 0.2,
                    gapSize: 0.1,
                } );
                const line = new THREE.Line( geometry, material );
                line.computeLineDistances();
                scene.add( line );
            } );

            // Create Logo with Pulsing Effect
            const logoTexture = loader.load( "/svg/bmslogoclean.svg" );
            const logoMaterial = new THREE.MeshBasicMaterial( { map: logoTexture, transparent: true } );
            const logoGeometry = new THREE.PlaneGeometry( 2, 2 );
            const logoMesh = new THREE.Mesh( logoGeometry, logoMaterial );
            logoMesh.position.set( 0, 0, 0 );
            scene.add( logoMesh );

            // Add Pulsing Rays from Logo
            const rayMaterial = new THREE.MeshStandardMaterial( {
                emissive: 0xffcc00, // Light gold
                emissiveIntensity: 0.5,
                transparent: true,
                opacity: 0.5,
            } );

            const rayGeometry = new THREE.RingGeometry( 2, 3, 32, 1 );
            const rayMesh = new THREE.Mesh( rayGeometry, rayMaterial );
            rayMesh.position.set( 0, 0, -0.5 ); // Behind the logo
            scene.add( rayMesh );

            const pulseRays = () =>
            {
                const scale = 1 + 0.5 * Math.sin( Date.now() * 0.002 );
                rayMesh.scale.set( scale, scale, scale );
                rayMaterial.emissiveIntensity = 0.5 + 0.5 * Math.abs( Math.sin( Date.now() * 0.002 ) );
            };

            // Place smaller icons around the circles
            svgs.forEach( ( svg, index ) =>
            {
                const texture = loader.load( svg.src );
                const material = new THREE.MeshBasicMaterial( {
                    map: texture,
                    transparent: true,
                } );

                const geometry = new THREE.PlaneGeometry(
                    isSmallScreen ? 0.5 : 0.6, // Larger width
                    isSmallScreen ? 0.5 : 0.6 // Larger height
                );
                const mesh = new THREE.Mesh( geometry, material );

                svgMeshes.push( mesh );
                scene.add( mesh );
            } );

            // Animate everything
            const animate = () =>
            {
                pulseRays();

                svgMeshes.forEach( ( mesh, i ) =>
                {
                    const radius = circleRadii[ i % circleRadii.length ];
                    const time = ( Date.now() / 5000 + i / svgMeshes.length ) % 1;
                    const angle = time * ( isSmallScreen ? Math.PI / 2 : 2 * Math.PI );
                    mesh.position.set(
                        radius * Math.cos( angle ),
                        radius * Math.sin( angle ),
                        0
                    );
                } );

                renderer.render( scene, camera );
                requestAnimationFrame( animate );
            };

            animate();
        };

        createScene();

        // Zoom-In Animation using GSAP
        gsap.to( camera.position, {
            z: 10,
            duration: 2,
            ease: "power2.out",
        } );

        window.addEventListener( "resize", resizeHandler );

        return () =>
        {
            window.removeEventListener( "resize", resizeHandler );
            container.removeChild( renderer.domElement );
        };
    }, [ svgs ] );

    return (
        <div
            ref={ containerRef }
            style={ {
                width: "100%",
                height: "100vh",
                position: "relative",
                overflow: "hidden",
            } }
        />
    );
};

export default ThreeCircleAnimation;
