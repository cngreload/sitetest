import React, { useEffect, useState } from "react";

interface BouncingLinesProps
{
    lineCount?: number;
    width?: number;
    height?: number;
    viewBox?: string;
    lineColor?: string;
    animationDurationRange?: [ number, number ]; // Min and max duration for animation
}

const BouncingLines: React.FC<BouncingLinesProps> = ( {
    lineCount = 10,
    width = 600,
    height = 300,
    viewBox = "0 0 120 100",
    lineColor = "#ffffff",
    animationDurationRange = [ 1.5, 3 ],
} ) =>
{
    const [ paths, setPaths ] = useState<{ startX: number; startY: number; endX: number; endY: number; }[]>( [] );

    // Helper function to generate random values
    const getRandom = ( min: number, max: number ) => Math.random() * ( max - min ) + min;

    useEffect( () =>
    {
        // Generate unique paths distributed across the viewBox
        const uniquePaths: { startX: number; startY: number; endX: number; endY: number; }[] = [];
        const usedPaths = new Set<string>();

        while ( uniquePaths.length < lineCount )
        {
            const startX = getRandom( 10, 110 ); // Random x-coordinate for start
            const startY = getRandom( 80, 90 ); // Start near the bottom
            const endX = getRandom( 10, 110 ); // Random x-coordinate for end
            const endY = getRandom( 10, 30 ); // End near the top
            const pathKey = `${ startX }-${ startY }-${ endX }-${ endY }`;

            if ( !usedPaths.has( pathKey ) )
            {
                uniquePaths.push( { startX, startY, endX, endY } );
                usedPaths.add( pathKey );
            }
        }

        setPaths( uniquePaths );
    }, [ lineCount ] );

    return (
        <svg
            width={ width }
            height={ height }
            viewBox={ viewBox }
            xmlns="http://www.w3.org/2000/svg"
            style={ { display: "block", margin: "0 auto", position: "relative" } }
        >
            { paths.map( ( path, index ) =>
            {
                const duration = getRandom( animationDurationRange[ 0 ], animationDurationRange[ 1 ] ).toFixed( 2 ); // Random duration

                return (
                    <line
                        key={ index }
                        x1={ path.startX }
                        y1={ path.startY }
                        x2={ path.startX }
                        y2={ path.startY }
                        stroke={ lineColor }
                        strokeWidth={ 2 }
                        strokeLinecap="round"
                        style={ {
                            animation: `missilePath-${ index } ${ duration }s ease-out forwards`,
                        } }
                    />
                );
            } ) }

            {/* Keyframe Animations */ }
            <style>
                { paths.map(
                    ( path, index ) => `
            @keyframes missilePath-${ index } {
              0% {
                x2: ${ path.startX };
                y2: ${ path.startY };
              }
              50% {
                x2: ${ ( path.startX + path.endX ) / 2 + getRandom( -10, 10 ) };
                y2: ${ Math.min( path.startY, path.endY ) - getRandom( 10, 20 ) };
              }
              100% {
                x2: ${ path.endX };
                y2: ${ path.endY };
              }
            }
          `
                ) }
            </style>
        </svg>
    );
};

export default BouncingLines;
