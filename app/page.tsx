import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Clock,
  Calendar,
  Dumbbell,
  User,
  Target,
  Lightbulb,
} from "lucide-react";

export default function WorkoutRoutine() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Mi Rutina de Entrenamiento
          </h1>
          <p className="text-slate-600 text-lg">
            Rutina postural diaria + Entrenamientos de gym (Martes, Jueves,
            Sábado)
          </p>
        </div>

        {/* Daily Routine Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <User className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-semibold text-slate-800">
              Rutina Diaria - Postural y Facial
            </h2>
            <Badge variant="secondary" className="ml-auto">
              <Clock className="h-3 w-3 mr-1" />
              10-15 min
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Phase 1 */}
            <Card className="border-blue-200 shadow-sm">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-blue-800 flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  FASE 1: Activación y corrección postural
                </CardTitle>
                <CardDescription>
                  5-7 minutos • Al iniciar el día o como pausa activa
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-slate-800 mb-2">
                      Estiramiento de pecho (1 min)
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Párate junto a una pared</li>
                      <li>• Estira un brazo hacia atrás apoyando la mano</li>
                      <li>• Gira suavemente tu torso hacia el lado opuesto</li>
                      <li>• 30 segundos por lado</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-medium text-slate-800 mb-2">
                      Retracción cervical (2 min)
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Siéntate derecha, hombros relajados</li>
                      <li>• Lleva el mentón hacia adentro</li>
                      <li>• Mantén 5 segundos, suelta</li>
                      <li>• 3 series de 10 repeticiones</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-medium text-slate-800 mb-2">
                      Estiramiento de cuello (1 min)
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Inclina la cabeza hacia un lado</li>
                      <li>• Usa la mano para leve presión</li>
                      <li>• 30 segundos por lado</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-medium text-slate-800 mb-2">
                      Postura de pared (2 min)
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Pégate a la pared con espalda, caderas, cabeza</li>
                      <li>• Mantén 1-2 minutos</li>
                      <li>• Imagina una cuerda jalando tu coronilla</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phase 2 */}
            <Card className="border-purple-200 shadow-sm">
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-purple-800 flex items-center gap-2">
                  <User className="h-5 w-5" />
                  FASE 2: Facial Yoga y tonificación
                </CardTitle>
                <CardDescription>
                  5-8 minutos • Después de la fase 1 o antes de dormir
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-slate-800 mb-2">
                      Besos al cielo (1 min)
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Mira hacia arriba y haz gesto de besar</li>
                      <li>• Siente el estiramiento debajo del mentón</li>
                      <li>• 15-20 repeticiones</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-medium text-slate-800 mb-2">
                      Lengua al paladar + sonrisa (1 min)
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Presiona lengua contra paladar mientras sonríes</li>
                      <li>• Mantén 5 segundos y relaja</li>
                      <li>• 15 repeticiones</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-medium text-slate-800 mb-2">
                      Soplado alternado de mejillas (1 min)
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Llena una mejilla de aire</li>
                      <li>• Pásalo a la otra mejilla</li>
                      <li>• Alterna durante 1 minuto</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-medium text-slate-800 mb-2">
                      Masaje con nudillos (2-3 min)
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>
                        • Masajea debajo de mandíbula de adentro hacia afuera
                      </li>
                      <li>• Círculos suaves en mejillas hacia la sien</li>
                      <li>• Usa crema o aceite facial si deseas</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Extra Recommendations */}
          <Card className="mt-6 border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-800 flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Recomendaciones Extra
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-medium text-amber-800 mb-2">
                    Al trabajar en PC:
                  </h4>
                  <ul className="text-amber-700 space-y-1">
                    <li>• Pantalla a altura de ojos</li>
                    <li>• Silla con soporte lumbar</li>
                    <li>• Pausas cada 45-60 min</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-amber-800 mb-2">
                    Hidratación:
                  </h4>
                  <ul className="text-amber-700 space-y-1">
                    <li>• Dieta baja en sal</li>
                    <li>• Menos azúcares procesados</li>
                    <li>• Reduce inflamación facial</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-amber-800 mb-2">Descanso:</h4>
                  <ul className="text-amber-700 space-y-1">
                    <li>• Dormir boca arriba</li>
                    <li>• Respirar por la nariz</li>
                    <li>• Ayuda a definir rostro</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Gym Routine */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Dumbbell className="h-6 w-6 text-green-600" />
            <h2 className="text-2xl font-semibold text-slate-800">
              Rutina Semanal de Gym
            </h2>
            <Badge variant="secondary" className="ml-auto">
              <Calendar className="h-3 w-3 mr-1" />
              Mar, , Sáb
            </Badge>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Monday */}
            <Card className="border-green-200 shadow-sm">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-green-800">
                  🧠 Martes - Tren Superior
                </CardTitle>
                <CardDescription>
                  Fuerza ligera + técnica • ~45 min
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="text-sm text-green-700 bg-green-100 p-2 rounded">
                    Ideal después de correr, no carga piernas
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Remo con mancuerna o polea – 3x10</li>
                    <li>• Press de pecho con mancuernas – 3x10</li>
                    <li>• Elevaciones laterales – 3x12</li>
                    <li>• Curl de bíceps – 3x12</li>
                    <li>• Extensión de tríceps – 3x12</li>
                    <li>• Plancha + bird-dog – 2x30 seg + 2x10 c/lado</li>
                  </ul>
                  <div className="text-xs text-green-600 bg-green-50 p-2 rounded mt-4">
                    ✅ Consejo: Usa pesos moderados y cuida tu postura
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Wednesday */}
            <Card className="border-blue-200 shadow-sm">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-blue-800">
                  🔥 Jueves - Tren Inferior
                </CardTitle>
                <CardDescription>Piernas y glúteos</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="text-sm text-blue-700 bg-blue-100 p-2 rounded">
                    Ideal después de correr si no sientes piernas pesadas
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Sentadillas con mancuernas o barra guiada – 3x10</li>
                    <li>• Peso muerto rumano con mancuernas – 3x10</li>
                    <li>• Zancadas alternas – 3x10 c/pierna</li>
                    <li>• Hip thrust – 3x12</li>
                    <li>• Elevaciones de talón – 3x15</li>
                    <li>• Plancha frontal – 2x30 seg</li>
                  </ul>
                  <div className="text-xs text-blue-600 bg-blue-50 p-2 rounded mt-4">
                    💡 Tip: Hazlo solo si el trote fue suave
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Saturday */}
            <Card className="border-purple-200 shadow-sm">
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-purple-800">
                  ⚡ Sábado - Full Body Funcional
                </CardTitle>
                <CardDescription>Ligero pero poderoso</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="text-sm text-purple-700 bg-purple-100 p-2 rounded">
                    Ideal para activar y trabajar control corporal
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-800 mb-2">
                      Circuito x3 vueltas:
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Kettlebell swing / peso muerto – 12</li>
                      <li>• Step-ups – 10 por pierna</li>
                      <li>• Remo TRX o máquina – 12</li>
                      <li>• Plancha con toques de hombro – 10 por lado</li>
                      <li>• Estocadas laterales – 10 por pierna</li>
                      <li>• Estiramientos de 10 min al final</li>
                    </ul>
                  </div>
                  <div className="text-xs text-purple-600 bg-purple-50 p-2 rounded mt-4">
                    ✅ Consejo: Hazlo con fluidez, como una mini clase funcional
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
