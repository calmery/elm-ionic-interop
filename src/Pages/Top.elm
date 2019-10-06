module Pages.Top exposing (view)

import Html exposing (Html, div, node, text)
import Html.Attributes exposing (attribute)
import Ionic exposing (buttons, content, datetime, header, menuButton, page, title, toolbar)
import Ionic.Attributes exposing (displayFormat, main_, slot, value)
import Ionic.Events exposing (onChange)
import Model exposing (Model)
import Update exposing (Msg(..))


view : Model -> Html Msg
view model =
    page
        [ main_ ]
        [ header
            []
            [ toolbar
                []
                [ buttons
                    [ slot "start" ]
                    [ menuButton [] [] ]
                , title [] [ text "Top" ]
                ]
            ]
        , content []
            [ datetime
                [ onChange DateTimeChanged
                , displayFormat "YYYY MM DD"
                , value model.datetime
                ]
                []
            ]
        ]
