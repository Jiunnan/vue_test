FORCE_INSTALL=false
for arg in "$@"
do
    if [ "$arg" = "--force" ]; then
        FORCE_INSTALL=true
        break
    fi
done

echo $FORCE_INSTALL

if [ ! -d "node_modules" ] || [ "$FORCE_INSTALL" = true ]; then
    npm install -g @vue/cli && npm install
fi

echo "npm will run start"

npm run start