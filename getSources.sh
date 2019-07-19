#!/bin/bash
TODAY=2177
START=$TODAY-365
echo "{ \"list\": ["
 
for (( c=$START; c<=$TODAY; c++ ))
do
	curl  https://xkcd.com/$c/info.0.json
	if [ "$c" -ne "$TODAY" ];
    then
    	echo ","
    fi
done

echo "] }"