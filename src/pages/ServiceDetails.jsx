import { useParams } from "react-router-dom";

export default function ServiceDetails() {
  const { slug } = useParams();

  return (
    <div className="min-h-screen pt-32 px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold">
          {slug}
        </h1>

        <p className="mt-6 text-lg text-slate-700">
          Service page coming soon...
        </p>
      </div>
    </div>
  );
}