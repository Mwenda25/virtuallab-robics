$root=Split-Path -Parent $MyInvocation.MyCommand.Path
$port=8765
$mime=@{'.html'='text/html; charset=utf-8';'.js'='text/javascript; charset=utf-8';'.mjs'='text/javascript; charset=utf-8';'.json'='application/json';'.wasm'='application/wasm';'.zip'='application/zip';'.css'='text/css';'.svg'='image/svg+xml';'.png'='image/png';'.ico'='image/x-icon'}
$l=New-Object System.Net.HttpListener
$l.Prefixes.Add("http://localhost:$port/")
try{$l.Start()}catch{Write-Host "Could not start on port $port. Is BotLabs Studio Ke already running? Close the other window and try again.";Read-Host "Press Enter";exit 1}
Write-Host "BotLabs Studio Ke is running at http://localhost:$port/"
Write-Host "Keep this window open while you use it. Close it to stop."
Start-Process "http://localhost:$port/"
while($l.IsListening){
  $c=$l.GetContext()
  try{
    $p=[Uri]::UnescapeDataString($c.Request.Url.AbsolutePath).TrimStart('/')
    if($p -eq ''){$p='index.html'}
    $f=[IO.Path]::GetFullPath((Join-Path $root $p))
    if($f.StartsWith($root) -and (Test-Path $f -PathType Leaf)){
      $b=[IO.File]::ReadAllBytes($f);$e=[IO.Path]::GetExtension($f).ToLower()
      $c.Response.ContentType=$(if($mime.ContainsKey($e)){$mime[$e]}else{'application/octet-stream'})
      $c.Response.ContentLength64=$b.Length;$c.Response.OutputStream.Write($b,0,$b.Length)
    }else{$c.Response.StatusCode=404}
  }catch{$c.Response.StatusCode=500}
  $c.Response.Close()
}
