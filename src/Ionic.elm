module Ionic exposing (application, content, datetime)

import Html exposing (div, node)
import Html.Attributes exposing (attribute, style)


application title route routes =
    { title = title
    , body =
        [ div [ style "display" "none", attribute "data-ionic-component" (Debug.toString route) ] routes
        , node "ion-app" [] [ node "ion-nav" [] [] ]
        ]
    }


content =
    node "ion-content"


datetime =
    node "ion-datetime"
