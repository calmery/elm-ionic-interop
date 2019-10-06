module Ionic.Attributes exposing (color, displayFormat, main_, side, slot, value)

import Html.Attributes exposing (attribute)


color =
    attribute "color"


displayFormat =
    attribute "display-format"


main_ =
    attribute "main" ""


side =
    attribute "side"


slot =
    attribute "slot"


value =
    Html.Attributes.value
