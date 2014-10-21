var X,Y:extended;
    N,XX,ans:longint;
begin
 Read(X,Y,N);
 ans:=0;
 XX:=trunc(x*n);
  if x<>10.0 then
  begin
   XX:=trunc((x+0.05)*n);
   while XX/N>=x+0.049999999999 do dec(XX);
  end;

  while  (((ans+XX)/(ans+n))>=y+0.0499999999999 ) do ans:=ans+1000;
  if ans>=1000 then 
  begin
   ans:=ans-1000;
   while  (((ans+XX)/(ans+n))>=y+0.0499999999999 ) do ans:=ans+1;
  end;
 write(ans);
end.
