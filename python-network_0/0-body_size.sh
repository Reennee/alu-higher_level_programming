#!/bin/bash
# this script sends a request and return the size of a body response
curl -sI $1 | grep "Content-Length" | cut -d " " -f2
