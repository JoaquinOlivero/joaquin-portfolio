FROM golang:alpine AS builder
# Install git.

# Git is required for fetching the dependencies.
RUN apk update && apk add --no-cache git
WORKDIR $GOPATH/src/mypackage/myapp/
COPY api/main.go api/go.mod .

# Fetch dependencies.
# Using go get.
RUN go get -d -v

# Build the binary.
RUN CGO_ENABLED=0 GOOS=linux GOARCH=arm64 go build -ldflags="-w -s" -o  /go/bin/joaquin-portfolio

FROM scratch
# create dir for go binary and static html files.
WORKDIR /app

# Copy our static executable.
COPY --from=builder /go/bin/joaquin-portfolio joaquin-portfolio

# Run the golang binary.
ENTRYPOINT ["/app/joaquin-portfolio"]