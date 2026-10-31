$source = @"
using System;
using System.Drawing;
using System.Runtime.InteropServices;

public class ShellThumb {
    [ComImport]
    [Guid("bcc18b79-ba16-442f-80c4-8a59c30c463b")]
    [InterfaceType(ComInterfaceType.InterfaceIsIUnknown)]
    public interface IShellItemImageFactory {
        [PreserveSig]
        int GetImage([In, MarshalAs(UnmanagedType.Struct)] SIZE size, [In] int flags, [Out] out IntPtr phbm);
    }

    [StructLayout(LayoutKind.Sequential)]
    public struct SIZE {
        public int cx;
        public int cy;
        public SIZE(int cx, int cy) { this.cx = cx; this.cy = cy; }
    }

    [DllImport("shell32.dll", CharSet = CharSet.Unicode, PreserveSig = false)]
    public static extern void SHCreateItemFromParsingName(
        [In] string pszPath,
        [In] IntPtr pbc,
        [In, MarshalAs(UnmanagedType.LPStruct)] Guid riid,
        [Out, MarshalAs(UnmanagedType.Interface)] out IShellItemImageFactory ppv
    );

    [DllImport("gdi32.dll")]
    public static extern bool DeleteObject(IntPtr hObject);

    public static bool SaveThumbnail(string filePath, string outPath, int width, int height) {
        try {
            Guid guid = new Guid("bcc18b79-ba16-442f-80c4-8a59c30c463b");
            IShellItemImageFactory factory;
            SHCreateItemFromParsingName(filePath, IntPtr.Zero, guid, out factory);

            IntPtr hBitmap;
            // SIIGBF_RESIZETOFIT = 0x00, SIIGBF_BIGGERSIZEOK = 0x01, SIIGBF_THUMBNAILONLY = 0x02
            int hr = factory.GetImage(new SIZE(width, height), 0x01, out hBitmap);
            if (hr != 0 || hBitmap == IntPtr.Zero) {
                Console.WriteLine("GetImage failed: " + hr);
                return false;
            }

            using (Bitmap bmp = Bitmap.FromHbitmap(hBitmap)) {
                bmp.Save(outPath, System.Drawing.Imaging.ImageFormat.Jpeg);
            }
            DeleteObject(hBitmap);
            return true;
        } catch (Exception ex) {
            Console.WriteLine("Exception: " + ex.Message);
            return false;
        }
    }
}
"@

Add-Type -TypeDefinition $source -ReferencedAssemblies System.Drawing

$video = (Resolve-Path "assets\images\PhongLuuNiem\PLN_DaiTaTuCangDocBaiThoTienBan.mp4").Path
$out = Join-Path (Split-Path $video) "PLN_DaiTaTuCangDocBaiThoTienBan_thumb.jpg"
Write-Output "Resolved video: $video"

$res = [ShellThumb]::SaveThumbnail($video, $out, 640, 480)
Write-Output "Result: $res"
if (Test-Path $out) {
    Write-Output "Thumbnail created! Size: $((Get-Item $out).Length)"
}
