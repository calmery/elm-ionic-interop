module Model exposing (Model, initialModel)

import Browser.Navigation exposing (Key)
import Data.EnvironmentVariables exposing (EnvironmentVariables)
import Route exposing (Route)


initialModel : EnvironmentVariables -> Key -> Maybe Route -> Model
initialModel environmentVariables key route =
    { environmentVariables = environmentVariables
    , key = key
    , route = route
    , datetime = "2020-01-01"
    }


type alias Model =
    { environmentVariables : EnvironmentVariables
    , key : Key
    , route : Maybe Route
    , datetime : String
    }
