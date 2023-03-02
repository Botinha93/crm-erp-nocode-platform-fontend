@echo off
certutil -encodehex -f %1 %1-B64.txt 0x40000001
ren %1-B64.txt temp.txt
FOR /F "tokens=*" %%g IN ('type temp.txt') do (SET VAR=%%g)
echo.data:image/gif;base64,%VAR%>%1-B64.txt 
del temp.txt