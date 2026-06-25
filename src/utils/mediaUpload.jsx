import { createClient } from "@supabase/supabase-js";

const anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhlcGF2cmV4bGpuZG9nY2JybW5zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzODIxODQsImV4cCI6MjA5Nzk1ODE4NH0.yaLAhVkARRbbmWsARZlNEmcHNz-31A09xMZZGMMnW9U";
const supabaseUrl = "https://xepavrexljndogcbrmns.supabase.co";

const supabase = createClient(supabaseUrl, anonKey);


export default function mediaUpload(file) {
	return new Promise((resolve, reject) => {
		if (file == null) {
			reject("No file selected");
		} else {
            const timestamp = new Date().getTime();
            const fileName = timestamp+file.name

			supabase.storage
				.from("images")
				.upload(fileName, file, {
					upsert: false,
					cacheControl: "3600",
				})
				.then(() => {
					const publicUrl = supabase.storage
						.from("images")
						.getPublicUrl(fileName).data.publicUrl;

					resolve(publicUrl);
				}).catch(
                    ()=>{
                        reject("An error occured")
                    }
                )
		}
	});
}
