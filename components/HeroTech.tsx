'use client';
// components/ThreeCircleTech.tsx
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

interface SvgItem
{
    src: string;
    name: string;
}

const ThreeCircleTech: React.FC = () =>
{
    const containerRef = useRef<HTMLDivElement>( null );

    const svgs: SvgItem[] = [
        { src: "/svg/techicons/assembly.svg", name: "Assembly" },
        { src: "/svg/techicons/nextjs.svg", name: "Nextjs" },
        { src: "/svg/techicons/csharp.svg", name: "C#" },
        { src: "/svg/techicons/php.svg", name: "PHP" },
        { src: "/svg/techicons/react.svg", name: "React" },
        { src: "/svg/techicons/vue.svg", name: "Vue" },
        { src: "/svg/techicons/c.svg", name: "C Language" },
        { src: "/svg/techicons/python.svg", name: "Python" },
        { src: "/svg/techicons/django.svg", name: "Django" },
        { src: "/svg/techicons/laravel.svg", name: "Laravel" },
        { src: "/svg/techicons/mongodb.svg", name: "Mongodb" },
        { src: "/svg/techicons/cplusplus.svg", name: "Cplusplus" },
        { src: "/svg/techicons/vhdl.svg", name: "Vhdl" },
        { src: "/svg/techicons/mysql.svg", name: "Mysql" },
        { src: "/svg/techicons/matlab.svg", name: "Matlab" },
    ];

    useEffect( () =>
    {
        const container = containerRef.current;
        if ( !container ) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, container.offsetWidth / container.offsetHeight, 0.1, 1000 );
        const renderer = new THREE.WebGLRenderer( { alpha: true } );
        renderer.setSize( container.offsetWidth, container.offsetHeight );
        container.appendChild( renderer.domElement );

        const svgMeshes: THREE.Mesh[] = [];
        const circleRadii = [ 2, 4, 6 ];

        const resizeHandler = () =>
        {
            const isSmallScreen = window.innerWidth <= 768;

            camera.aspect = isSmallScreen
                ? ( container.offsetWidth / 2 ) / container.offsetHeight
                : container.offsetWidth / container.offsetHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(
                isSmallScreen ? container.offsetWidth / 2 : container.offsetWidth,
                container.offsetHeight
            );

            scene.scale.set(
                isSmallScreen ? 0.5 : 1,
                isSmallScreen ? 0.5 : 1,
                isSmallScreen ? 0.5 : 1
            );
        };

        const createScene = () =>
        {
            const loader = new THREE.TextureLoader();

            // Create Pulsating Logo
            const logoTexture = loader.load( "/svg/bmslogoclean.svg" );
            const logoMaterial = new THREE.SpriteMaterial( { map: logoTexture, transparent: true } );
            const logoMesh = new THREE.Sprite( logoMaterial );
            logoMesh.scale.set( 4, 4, 1 );
            logoMesh.position.set( 0, 0, 0 );
            scene.add( logoMesh );

            gsap.to( logoMesh.scale, {
                x: 4.5,
                y: 4.5,
                repeat: -1,
                yoyo: true,
                duration: 2,
                ease: "power2.inOut",
            } );

            // Create Glowing Rings
            const colors = [
                { color1: 0xffcc00, color2: 0xff9900 }, // Gold to Orange
                { color1: 0x00ccff, color2: 0x0033ff }, // Light Blue to Dark Blue
                { color1: 0xcc00ff, color2: 0x660099 }, // Purple to Deep Purple
            ];

            circleRadii.forEach( ( radius, index ) =>
            {
                const ringGeometry = new THREE.RingGeometry( radius - 0.05, radius + 0.05, 64 );
                const { color1, color2 } = colors[ index % colors.length ];

                const ringMaterial = new THREE.ShaderMaterial( {
                    uniforms: {
                        color1: { value: new THREE.Color( color1 ) },
                        color2: { value: new THREE.Color( color2 ) },
                    },
                    vertexShader: `
                        varying vec2 vUv;
                        void main() {
                            vUv = uv;
                            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                        }
                    `,
                    fragmentShader: `
                        uniform vec3 color1;
                        uniform vec3 color2;
                        varying vec2 vUv;

                        void main() {
                            float intensity = 1.0 - length(vUv - 0.5) * 2.0;
                            vec3 color = mix(color1, color2, intensity);
                            gl_FragColor = vec4(color, intensity);
                        }
                    `,
                    transparent: true,
                } );

                const glowingRing = new THREE.Mesh( ringGeometry, ringMaterial );
                glowingRing.position.set( 0, 0, 0 );
                scene.add( glowingRing );

                // Rotate the glowing rings dynamically
                gsap.to( glowingRing.rotation, {
                    z: Math.PI * 2,
                    repeat: -1,
                    duration: 10 - index * 2,
                    ease: "linear",
                } );

                // Add Circuit-Style Dashlines
                const dashedCurve = new THREE.EllipseCurve(
                    0, 0, radius, radius, 0, 2 * Math.PI, false
                );
                const dashedGeometry = new THREE.BufferGeometry().setFromPoints( dashedCurve.getPoints( 100 ) );
                const dashedMaterial = new THREE.LineDashedMaterial( {
                    color: [ 0xff0, 0x0000ff, 0x9900cc ][ index % 3 ], // Circuit-style colors: Red, Blue, Purple
                    dashSize: 0.3,
                    gapSize: 0.2,
                    linewidth: 1,
                } );

                const dashedLine = new THREE.Line( dashedGeometry, dashedMaterial );
                dashedLine.computeLineDistances();
                scene.add( dashedLine );

                // Rotate the dashlines for effect
                gsap.to( dashedLine.rotation, {
                    z: -Math.PI * 2,
                    repeat: -1,
                    duration: 15 - index * 2,
                    ease: "linear",
                } );
            } );

            // Place smaller icons around the circles
            svgs.forEach( ( svg, index ) =>
            {
                const texture = loader.load( svg.src );
                const material = new THREE.MeshBasicMaterial( {
                    map: texture,
                    transparent: true,
                } );

                const geometry = new THREE.PlaneGeometry( 0.6, 0.6 );
                const mesh = new THREE.Mesh( geometry, material );

                const radius = circleRadii[ index % circleRadii.length ];
                const angleOffset = ( index / svgs.length ) * 2 * Math.PI;

                mesh.position.set(
                    radius * Math.cos( angleOffset ),
                    radius * Math.sin( angleOffset ),
                    0
                );

                svgMeshes.push( mesh );
                scene.add( mesh );
            } );

            // Animate everything
            const animate = () =>
            {
                svgMeshes.forEach( ( mesh, i ) =>
                {
                    const radius = circleRadii[ i % circleRadii.length ];
                    const time = ( Date.now() / 5000 + i / svgMeshes.length ) % 1;
                    const angle = time * 2 * Math.PI;

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

        gsap.to( camera.position, {
            z: 10,
            duration: 2,
            ease: "power2.out",
        } );

        window.addEventListener( "resize", resizeHandler );
        resizeHandler();

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

export default ThreeCircleTech;
