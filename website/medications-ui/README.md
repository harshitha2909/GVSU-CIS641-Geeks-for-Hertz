zip -r medication-ui.zip medications-ui -x "medications-ui/node_modules/**" "medications-ui/.expo/**" "medications-ui/.git/**"


zip -r medication-backend.zip medications/ -x "medications-ui/node_modules/**" "medications-ui/.expo/**"
