# GRPC Web

Test of GRPC Web. The backend uses the [Sunrise api](https://api.met.no/weatherapi/sunrise/2.0/documentation) form Meteorologisk institutt (Norway)

# Prerequists

- Download [code generator plugins](https://github.com/grpc/grpc-web#code-generator-plugin) to genereate code 
    -  protoc-gen-grpc-web:
         - Download
         - Install
            ```
             sudo mv protoc-gen-grpc-web-1.0.7-linux-x86_64 /usr/local/bin/protoc-gen-grpc-web
             chmod +x /usr/local/bin/protoc-gen-grpc-web
             ```
    - protoc
        - Download
        - Install:
            ```
             PROTOC_ZIP=protoc-3.7.1-linux-x86_64.zip
             curl -OL https://github.com/protocolbuffers/protobuf/releases/download/v3.7.1/$PROTOC_ZIP
             sudo unzip -o $PROTOC_ZIP -d /usr/local bin/protoc
             sudo unzip -o $PROTOC_ZIP -d /usr/local 'include/*'
             rm -f $PROTOC_ZIP
            ```

# Generate code :
The repo contains the generated code, so there is no need to do this. But if you want to give it at try, do the following:
- Create Protos folder in client/src
- mkdir protos
- Run script:
    ```
OUTDIR=./client/src/protos;INDIR=./server/Protos; protoc -I=$INDIR sunrise.proto  --j
s_out=import_style=commonjs,binary:$OUTDIR --grpc-web_out=import_style=typescript,mode=grpcwebtext:$OUTDIR
    ```
- Disable ES-lint in sunrise_pb.js
    - Add /* eslint-disable */  
    - (May also add an eslint config)


# Run
- Client: 
 ```
 cd client
 npm start
  ```
- Server
 ```
 cd server
 dotnet run
  ```



