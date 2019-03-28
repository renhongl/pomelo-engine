export default `
# Scene

The API documentation of Scene class, Learn more about the properties
and methods points.

## Properties

|Name|Type|Default|Description|
|:-|:-|:-|-:|
|name|String|Unnamed_${Scene.SID}|The name of this scens|
|x|Number|0|The x coordinate of this scene|
|y|Number|0|The y coordinate of this scene|
|w|Number|0|The width value of this scene|
|h|Number|0|The height value of this scene|
|color|String|#fff|The default color of this scene|
|holder|DOM|null|Scene background element|
|cvs|Canvas Element||The canvas of this scene|
|ctx|Object||The context of this scens|
|listeners|Array&lt;Event&gt;|[]|The event listeners of this scene|
|rObjs|Array&lt;RenderObj&gt;|[]|The render objects of this scene|
|namedObjs|Object|{}|The named render objects of this scene|

## Methods

|Name|Return|Description|
|:-|:-|:-|-:|
|setPos(Number x, Number y)|null|Set the position of this scene|
|setSize(Number w, Number y)|null|Set the size of this scene|
|setColor(String color)|null|Set the color of this scene|
|update()|null|Update all render object for this scene|
|removeAllCanRemove()|||
|render()|null|Render all render object for this scene|
|renderRObj()|null|The detail about how to render render object|
|clear()|null|Clear this scene|
|show()|null|Show this scene|
|hide()|null|Hide this scene|
|setBGImg(String url, Number model)|null|Set background image for this scene|
|clean()|null|Clean this scene|
|addRObj(RenderObj renderObj)|null|Add render object to this scene|
`;
