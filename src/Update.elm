module Update exposing (Msg(..), update)

import Browser exposing (UrlRequest(..))
import Browser.Navigation exposing (load, pushUrl)
import Model exposing (Model)
import Port exposing (urlChanged)
import Route exposing (parseUrl)
import Url exposing (Url)


type Msg
    = LinkClicked UrlRequest
    | UrlChanged Url
    | DateTimeChanged String


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        LinkClicked urlRequest ->
            case urlRequest of
                Internal url ->
                    ( model, pushUrl model.key (Url.toString url) )

                External href ->
                    ( model, load href )

        UrlChanged url ->
            let
                route =
                    parseUrl url
            in
            ( { model | route = route }
            , urlChanged ()
            )

        DateTimeChanged datetime ->
            ( { model | datetime = datetime }, Cmd.none )