image_name="vue-test-img-prod"
port_num=9999

while [ $# -gt 0]; do
    case $1 in
        --image_name=*)
            image_name="${1#*=}"
            ;;
        --port_num=*)
            port_num="${1#*=}"
            ;;
    esac
    shift
done

echo "Image name: $image_name"
echo "Port number: $port_num"

docker run -itd -p $port_num:9999 -v ./vue_test:/app -w /app "$image_name"