import { Play } from 'lucide-react';

export function VideoSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 px-6 py-2 rounded-full mb-6">
            <span className="text-blue-700 font-semibold flex items-center">
              <Play className="w-4 h-4 mr-2" />
              Contenido Multimedia
            </span>
          </div>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            Video Explicativo
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mira este video para obtener una explicación completa de nuestra página y sus funcionalidades.
          </p>
        </div>

        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/watch?v=WKJyf-rgLNk"
              title="Video Explicativo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-8 bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Play className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Guía Visual Completa
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Este video explicará un poco a cerca de lo que es la calidad del software y su importancia en el desarrollo de software.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
