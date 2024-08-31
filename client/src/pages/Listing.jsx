import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";

export default function Listing() {
  SwiperCore.use([Navigation]);
  const params = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true); // Set loading to true initially
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
        } else {
          setListing(data);
          setError(false);
        }
      } catch (err) {
        console.error("Failed to fetch listing:", err); // Log error for debugging
        setError(true);
      } finally {
        setLoading(false); // Ensure loading is set to false in both cases
      }
    };
    fetchListing();
  }, [params.listingId]);

  if (loading) return <p className="text-center my-7 text-2xl">Loading...</p>;
  if (error)
    return <p className="text-center my-7 text-2xl">Something went wrong</p>;

  return (
    <main>
      {listing && (
        <Swiper navigation>
          {listing.imageUrls.map((url) => (
            <SwiperSlide key={url}>
              <div
                className="h-[550px]"
                style={{
                  background: `url(${url}) center no-repeat`,
                  backgroundSize: "cover",
                }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {!listing && !loading && !error && (
        <p className="text-center my-7 text-2xl">No listings available</p>
      )}
    </main>
  );
}
