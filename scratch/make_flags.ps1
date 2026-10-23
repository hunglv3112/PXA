Add-Type -AssemblyName System.Drawing

$outDir = Join-Path (Get-Location) "assets\images"
if (!(Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir -Force }

# 1. Tạo cờ Tổ quốc PNG (600x400)
$bmp1 = New-Object System.Drawing.Bitmap(600, 400)
$g1 = [System.Drawing.Graphics]::FromImage($bmp1)
$g1.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$redBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(218, 37, 29))
$g1.FillRectangle($redBrush, 0, 0, 600, 400)
$yellowBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 255, 0))

$cx = 300.0
$cy = 200.0
$rOut = 120.0
$rIn = $rOut * [Math]::Sin(18 * [Math]::PI / 180.0) / [Math]::Sin(54 * [Math]::PI / 180.0)
$pts = New-Object 'System.Drawing.PointF[]' 10
for ($i = 0; $i -lt 10; $i++) {
    $ang = (-90 + $i * 36) * [Math]::PI / 180.0
    $r = if ($i % 2 -eq 0) { $rOut } else { $rIn }
    $pts[$i] = New-Object System.Drawing.PointF(($cx + $r * [Math]::Cos($ang)), ($cy + $r * [Math]::Sin($ang)))
}
$g1.FillPolygon($yellowBrush, $pts)
$g1.Dispose()
$dest1 = Join-Path $outDir "co_to_quoc.png"
$bmp1.Save($dest1, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp1.Dispose()

# 2. Tạo cờ Đảng PNG (600x400)
$bmp2 = New-Object System.Drawing.Bitmap(600, 400)
$g2 = [System.Drawing.Graphics]::FromImage($bmp2)
$g2.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g2.FillRectangle($redBrush, 0, 0, 600, 400)

# Vẽ búa nghiêng 45 độ
$state = $g2.Save()
$g2.TranslateTransform(300, 200)
$g2.RotateTransform(45)
# Cán búa
$g2.FillRectangle($yellowBrush, -9, -40, 18, 140)
# Đầu búa
$g2.FillRectangle($yellowBrush, -38, -80, 76, 40)
$g2.Restore($state)

# Vẽ liềm
$yellowPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 255, 0), 22)
$yellowPen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
$yellowPen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
$path = New-Object System.Drawing.Drawing2D.GraphicsPath
$path.AddArc(210, 105, 175, 175, -50, 220)
$g2.DrawPath($yellowPen, $path)

# Cán liềm
$state2 = $g2.Save()
$g2.TranslateTransform(300, 200)
$g2.RotateTransform(-40)
$g2.FillRectangle($yellowBrush, -8, 85, 16, 48)
$g2.Restore($state2)

$g2.Dispose()
$dest2 = Join-Path $outDir "co_dang.jpg"
$bmp2.Save($dest2, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp2.Dispose()

Write-Output "OK_FLAGS_CREATED_SUCCESS"
