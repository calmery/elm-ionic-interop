port module Ionic.Port exposing (createAlert, createLoading, createToast, refreshComplete)


port createAlert : () -> Cmd msg


port createLoading : () -> Cmd msg


port createToast : () -> Cmd msg


port refreshComplete : () -> Cmd msg
