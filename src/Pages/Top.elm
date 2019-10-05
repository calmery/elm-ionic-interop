module Pages.Top exposing (view)

import Html exposing (Html, div)
import Ionic exposing (datetime)
import Ionic.Attributes exposing (displayFormat, value)
import Ionic.Events exposing (onChange)
import Model exposing (Model)
import Update exposing (Msg(..))


view : Model -> Html Msg
view model =
    div
        []
        [ datetime
            [ onChange DateTimeChanged
            , displayFormat "YYYY MM DD"
            , value model.datetime
            ]
            []
        ]
