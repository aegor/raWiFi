l="rationale@friends.akulovs.com"
f="rawifi.tgz"
rf="/opt/Rationale/wifilogger/"
#debug="echo"
port=9000
debug=""

tar --exclude=".meteor/local" -zcf ../${f} . && \
ssh ${l} "rm -f ${rf}${f}" && \
scp ../${f} ${l}:${rf}${f} && \
ssh ${l} "cd ${rf} ; tar -zxf ${f}" && \
#ssh ${l} 

#$debug ssh -L ${port}:127.0.0.1:${port} ${l} "cd ${rf} ; tar -zxf ${f} ; bash"
#-R [удаленный_адрес:]удаленный_порт:локальный_адрес:локальный_порт - с  сервера на локальную
#-L [локальный_адрес:]локальный_порт:удаленный_адрес:удаленный_порт - с локальной на сервер