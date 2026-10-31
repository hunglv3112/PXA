$source = @"
using System;
using System.IO;
using System.Threading.Tasks;
using Windows.Storage;
using Windows.Storage.FileProperties;
using Windows.Storage.Streams;

public class VideoThumbExtractor {
    public static bool Extract(string videoPath, string outputPath) {
        try {
            var file = StorageFile.GetFileFromPathAsync(videoPath).AsTask().GetAwaiter().GetResult();
            var thumb = file.GetThumbnailAsync(ThumbnailMode.VideosView, 640).AsTask().GetAwaiter().GetResult();
            if (thumb == null) return false;
            
            using (var stream = thumb.AsStream())
            using (var fileStream = File.Create(outputPath)) {
                stream.CopyTo(fileStream);
            }
            return true;
        } catch (Exception ex) {
            Console.WriteLine("Error: " + ex.ToString());
            return false;
        }
    }
}
"@

Add-Type -TypeDefinition $source

