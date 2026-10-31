[Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime] | Out-Null
[Windows.Storage.FileProperties.ThumbnailMode, Windows.Storage, ContentType = WindowsRuntime] | Out-Null
[Windows.Foundation.AsyncStatus, Windows.Foundation, ContentType = WindowsRuntime] | Out-Null
[Windows.Storage.Streams.DataReader, Windows.Storage.Streams, ContentType = WindowsRuntime] | Out-Null

$dir = Split-Path -Parent $MyInvocation.MyCommand.Path
$projectRoot = Split-Path -Parent $dir
$videoPath = Join-Path $projectRoot "assets\images\PhongLuuNiem\PLN_DaiTaTuCangDocBaiThoTienBan.mp4"
$outputPath = Join-Path $projectRoot "assets\images\PhongLuuNiem\PLN_DaiTaTuCangDocBaiThoTienBan_thumb.jpg"

Write-Output "Video: $videoPath"

$asyncOp = [Windows.Storage.StorageFile]::GetFileFromPathAsync($videoPath)
while ($asyncOp.Status -eq [Windows.Foundation.AsyncStatus]::Started) { Start-Sleep -Milliseconds 50 }
$file = $asyncOp.GetResults()

$thumbOp = $file.GetThumbnailAsync([Windows.Storage.FileProperties.ThumbnailMode]::VideosView, 640)
while ($thumbOp.Status -eq [Windows.Foundation.AsyncStatus]::Started) { Start-Sleep -Milliseconds 50 }
$thumb = $thumbOp.GetResults()

Write-Output "Got thumb stream: $($thumb.ContentType), Size: $($thumb.Size)"

$reader = New-Object Windows.Storage.Streams.DataReader($thumb)
$loadOp = $reader.LoadAsync($thumb.Size)
while ($loadOp.Status -eq [Windows.Foundation.AsyncStatus]::Started) { Start-Sleep -Milliseconds 50 }

$bytes = New-Object byte[] $thumb.Size
$reader.ReadBytes($bytes)

[System.IO.File]::WriteAllBytes($outputPath, $bytes)
Write-Output "Saved: $outputPath, Length: $($bytes.Length)"
