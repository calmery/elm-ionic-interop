module View exposing (view)

import Browser exposing (Document)
import Html exposing (Html, div, node, text)
import Html.Attributes exposing (attribute)
import Ionic exposing (app, content, header, item, menu, title, toolbar)
import Ionic.Attributes exposing (color, side)
import Model exposing (Model)
import Pages.Example as Example
import Pages.NotFound as NotFound
import Pages.Top as Top
import Route exposing (Route(..))
import Update exposing (Msg(..))


view : Model -> Document Msg
view model =
    { title = "Elm App"
    , body =
        [ app
            []
            [ menu
                [ side "start" ]
                [ header
                    []
                    [ toolbar [ color "primary" ] [ title [] [ text "Menu" ] ]
                    , content
                        []
                        [ item [] [ text "Menu" ] ]
                    ]
                ]
            , viewPage model
            ]
        ]
    }


viewPage : Model -> Html Msg
viewPage model =
    case model.route of
        Just route ->
            case route of
                Top ->
                    Top.view model

                Example ->
                    Example.view model

        Nothing ->
            NotFound.view
