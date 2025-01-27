import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import iranGeoJSON from "@/data/iran-geojson.json"; // Adjust the path to your file

const IranMap = () =>
{
    const mapRef = useRef( null );

    useEffect( () =>
    {
        // Set up the SVG dimensions
        const width = 800;
        const height = 600;

        // Create a projection centered on Iran
        const projection = d3
            .geoMercator()
            .center( [ 54, 32 ] ) // Approximate center of Iran
            .scale( 2000 ) // Adjust the scale
            .translate( [ width / 2, height / 2 ] ); // Center on SVG

        // Create a path generator with the projection
        const pathGenerator = d3.geoPath().projection( projection );

        // Add a type assertion for the GeoJSON data
        const geoJSONData = iranGeoJSON as GeoJSON.FeatureCollection<GeoJSON.Geometry>;

        // Create the SVG element
        const svg = d3
            .select( mapRef.current )
            .attr( "width", width )
            .attr( "height", height )
            .style( "background-color", "#f0f0f0" );

        // Draw the map
        svg
            .selectAll( "path" )
            .data( geoJSONData.features ) // Use the correctly typed GeoJSON features
            .enter()
            .append( "path" )
            .attr( "d", pathGenerator ) // Create the path using the generator
            .attr( "fill", "#e0e0e0" ) // Default fill color
            .attr( "stroke", "#333" ) // Border color
            .attr( "stroke-width", 0.5 )
            .on( "mouseover", function ()
            {
                d3.select( this ).attr( "fill", "#ff5722" ); // Highlight on hover
            } )
            .on( "mouseout", function ()
            {
                d3.select( this ).attr( "fill", "#e0e0e0" ); // Reset color on mouse out
            } );
    }, [] );

    return <svg ref={ mapRef }></svg>;
};

export default IranMap;
