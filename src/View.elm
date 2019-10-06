module View exposing (view)

import Browser exposing (Document)
import Html exposing (Html, a)
import Html.Attributes exposing (href)
import Ionic exposing (..)
import Ionic.Attributes exposing (..)
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
            (case model.route of
                Just route ->
                    case route of
                        Top ->
                            Top.view model

                        Example ->
                            Example.view model

                Nothing ->
                    NotFound.view
            )
        ]
    }
