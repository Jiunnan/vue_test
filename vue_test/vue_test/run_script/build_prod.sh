image_name="vue-test-img-prod"

while [ $# -gt 0 ]; do
    case $1 in
        --image_name=*)
            image_name="${1#*=}"
            ;;
    esac
    shift
done

echo "Image name: $image_name"

docker build -f Dockerfile.prod -t "$image_name" .