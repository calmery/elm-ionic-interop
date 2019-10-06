module Pages.Top exposing (view)

import Html exposing (Html, a, div, node, text)
import Html.Attributes exposing (attribute, href)
import Ionic exposing (datetime)
import Ionic.Attributes exposing (displayFormat, value)
import Ionic.Events exposing (onChange)
import Model exposing (Model)
import Update exposing (Msg(..))


view : Model -> List (Html Msg)
view model =
    viewHelper



-- [ datetime
--     [ onChange DateTimeChanged
--     , displayFormat "YYYY MM DD"
--     , value model.datetime
--     ]
--     []
-- ]


viewHelper =
    [ node "ion-header"
        []
        [ node "ion-toolbar"
            []
            [ node "ion-buttons"
                [ attribute "slot" "start" ]
                [ node "ion-back-button" [] [] ]
            , node "ion-title" [] [ text "Top" ]
            ]
        ]
    , node "ion-content"
        [ attribute "padding" "" ]
        [ a [ href "/#/example" ] [ text "Go To Example" ] ]
    ]
