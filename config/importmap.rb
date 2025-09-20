# Pin npm packages by running ./bin/importmap

pin "application", to: "application.js"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin_all_from "app/javascript/components", under: "components"
pin "react" # @19.1.1
pin "react-dom" # @19.1.1
pin "react-on-rails" # @16.0.0
pin "react-dom/client", to: "react-dom--client.js" # @19.1.1
pin "react-dom/server", to: "react-dom--server.js" # @19.1.1
pin "scheduler" # @0.26.0
