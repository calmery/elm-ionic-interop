module Pages.Example exposing (view)

import Html exposing (Html, a, div, text)
import Html.Attributes exposing (href)
import Model exposing (Model)
import Update exposing (Msg)


view : Model -> List (Html Msg)
view model =
    [ a [ href "/#/" ] [ text "Go to Top" ]
    ]
