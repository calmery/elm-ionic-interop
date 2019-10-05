module Ionic.Events exposing (onChange)

import Html exposing (Attribute)
import Html.Events exposing (on, targetValue)
import Json.Decode as Json


onChange : (String -> msg) -> Attribute msg
onChange handler =
    on "ionChange" (Json.map handler targetValue)
