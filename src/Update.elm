module Update exposing (Msg(..), update)

import Browser exposing (UrlRequest(..))
import Browser.Navigation exposing (load, pushUrl)
import Ionic.Port exposing (createAlert, createLoading, createToast, refreshComplete)
import Model exposing (Model)
import Process
import Route exposing (parseUrl)
import Task
import Url exposing (Url)


type Msg
    = LinkClicked UrlRequest
    | UrlChanged Url
    | DateTimeChanged String
    | CreateAlert
    | CreateLoading
    | CreateToast
    | OnRefresh
    | RefreshComplete


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
            , Cmd.none
            )

        DateTimeChanged datetime ->
            ( { model | datetime = datetime }, Cmd.none )

        CreateAlert ->
            ( model, createAlert () )

        CreateLoading ->
            ( model, createLoading () )

        CreateToast ->
            ( model, createToast () )

        OnRefresh ->
            ( model, Task.perform (\_ -> RefreshComplete) (Process.sleep 3000) )

        RefreshComplete ->
            ( model, refreshComplete () )
