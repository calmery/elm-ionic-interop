module Pages.Example exposing (view)

import Html exposing (Html, a, div, node, text)
import Html.Attributes exposing (attribute, href)
import Model exposing (Model)
import Update exposing (Msg)


view : Model -> List (Html Msg)
view model =
    viewHelper


viewHelper =
    [ node "ion-header"
        []
        [ node "ion-toolbar"
            []
            [ node "ion-buttons"
                [ attribute "slot" "start" ]
                [ node "ion-back-button" [] [] ]
            , node "ion-title" [] [ text "Example" ]
            ]
        ]
    , node "ion-content"
        []
        [ a [ href "/#/" ] [ text "Go To Top" ] ]
    ]
