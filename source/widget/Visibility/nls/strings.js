define({
  root: ({
    _widgetLabel: "Visibility", // Label of widget
    
    "observerLocation": "Observer Location",
    "fieldOfView": "Field of View",
    "useMilsText": "Use mils for bearing angles",
    "observerHeight": "Observer Height",
    "minObsDistance": "Min Observable Distance",
    "maxObsDistance": "Max Observable Distance",
    "taskURLError": "The widget configuration file contains a URL that is unreachable. Please check with your system administrator",
    "taskURLInvalid": "The geoprocessing task configured with this widget is not valid. Please check with your system administrator",
    "viewshedError": "An error occured whilst creating visibility. Please ensure your observer location falls within the extent of your elevation surface.</p>",
    "validationError": "<p>The visibility creation form has missing or invalid parameters, Please ensure:</p><ul><li>An observer location has been set.</li><li>The observer Field of View is not 0.</li><li>The observer height contains a valid value.</li><li>The min and max observable distances contain valid values.</li></ul>",
    "comfirmInputNotation": "Confirm Input Notation",
    "notationsMatch": "notations match your input please confirm which you would like to use:",
    "createBtn": "Create",
    "clearBtn": "Clear",
    "setCoordFormat": "Set Coordinate Format String", // Shown as label for set format string
    "prefixNumbers": "Add '+/-' prefix to positive and negative numbers", // Shown as text next to the add prefix check box
    "parseCoordinatesError": "Unable to parse coordinates. Please check your input.", //Shown as error message for unknown coordinates
    "cancelBtn": "Cancel", // Shown as label on cancel button
    "applyBtn": "Apply", // Shown as label on apply button
    
    // notation strings
    "DD": "DD", // Shown as DD label in coordinate type dropdown within format input settings
    "DDM": "DDM", // Shown as DDM label in coordinate type dropdown within format input settings
    "DMS": "DMS", // Shown as DMS label in coordinate type dropdown within format input settings
    "DDRev": "DDRev", // Shown as DDRev label in coordinate type dropdown within format input settings
    "DDMRev": "DDMRev", // Shown as DDMRev label in coordinate type dropdown within format input settings
    "DMSRev": "DMSRev", // Shown as DMSRev label in coordinate type dropdown within format input settings
    "USNG": "USNG", // Shown as USNG label in coordinate type dropdown within format input settings
    "MGRS": "MGRS", // Shown as MGRS label in coordinate type dropdown within format input settings
    "UTM_H": "UTM (H)", // Shown as UTM (H) label in coordinate type dropdown within format input settings
    "UTM": "UTM", // Shown as UTM label in coordinate type dropdown within format input settings
    "GARS": "GARS", // Shown as GARS label in coordinate type dropdown within format input settings
    "GEOREF": "GEOREF", // Shown as GEOREF label in coordinate type dropdown within format input settings
    "DDLatLongNotation": "Decimal Degrees - Latitude/Longitude", // Shown as Decimal Degrees - Latitude/Longitude label in confirm coordinate type dropdown
    "DDLongLatNotation": "Decimal Degrees  - Longitude/Latitude", // Shown as Decimal Degrees  - Longitude/Latitude label in confirm coordinate type dropdown
    "DDMLatLongNotation": "Degrees Decimal Minutes - Latitude/Longitude", // Shown as Degrees Decimal Minutes - Latitude/Longitude label in confirm coordinate type dropdown
    "DDMLongLatNotation": "Degrees Decimal Minutes - Longitude/Latitude", // Shown as Degrees Decimal Minutes - Longitude/Latitude label in confirm coordinate type dropdown
    "DMSLatLongNotation": "Degrees Minutes Seconds - Latitude/Longitude", // Shown as Degrees Minutes Seconds - Latitude/Longitude label in confirm coordinate type dropdown
    "DMSLongLatNotation": "Degrees Minutes Seconds - Longitude/Latitude", // Shown as Degrees Minutes Seconds - Longitude/Latitude label in confirm coordinate type dropdown
    "GARSNotation": "GARS", // Shown as GARS label in confirm coordinate type dropdown
    "GEOREFNotation": "GEOREF", // Shown as GEOREF label in confirm coordinate type dropdown
    "MGRSNotation": "MGRS", // Shown as MGRS label in confirm coordinate type dropdown
    "USNGNotation": "USNG", // Shown as USNG label in confirm coordinate type dropdown
    "UTMBandNotation": "UTM - Band Letter", // Shown as UTM - Band Letter label in confirm coordinate type dropdown
    "UTMHemNotation": "UTM - Hemisphere (N/S)" // Shown as UTM - Hemisphere (N/S)de label in confirm coordinate type dropdown
  })
});
