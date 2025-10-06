import { useParams, useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { ArrowLeft, Music2, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const compositionData: Record<string, any> = {
  "1": {
    id: 1,
    name: "Piya Bin Nahi Aavat Chain",
    raag: "Yaman",
    taal: "Teentaal",
    composer: "Amir Khusro",
    style: "Khayal",
    tempo: "Vilambit (Slow)",
    scale: "Major",
    timeSignature: "16/4",
    original: {
      notation: `स्थाई:
पिया बिन नहि आवत चैन।
पिया बिन नहि आवत चैन॥

अंतरा:
और सखी री सब कोई मिल मनावत,
कहो कैसे छुटे रे मोरे नैन।
पिया बिन नहि आवत चैन॥`,
      description: "Traditional bandish in Raag Yaman, Teentaal. This composition expresses longing and devotion in the classical Khayal style."
    },
    converted: {
      notation: `Key: C Major (Yaman = Lydian Mode)
Time Signature: 16/4 (Teentaal - 16 beats)

Sthayi:
C  D  E  F#  G  A  B  C' - Pi-ya bin na-hi aa-vat chain
C  D  E  F#  G  A  B  C' - Pi-ya bin na-hi aa-vat chain

Antara:
G  A  B  C'  D'  E'  F#' - Aur sa-khi ri sab ko-i
E' D' C' B  A  G  F#  E - Mil ma-na-vat ka-ho kai-se
D  E  F#  G  A  B  C' - Chhu-te re mo-re nain`,
      description: "Western notation using Lydian mode (raised 4th) to represent Yaman's characteristic #4. Time signature adapted to 16/4 to match Teentaal structure."
    }
  },
  "2": {
    id: 2,
    name: "Albela Sajan Aayo Re",
    raag: "Bhairavi",
    taal: "Teentaal",
    composer: "Pt. Jasraj",
    style: "Bhajan",
    tempo: "Madhya (Medium)",
    scale: "Phrygian Dominant",
    timeSignature: "16/4",
    original: {
      notation: `स्थाई:
अलबेला सजन आयो रे।
मोरे अँगना आयो रे॥

अंतरा:
काहे को रोकूँ, काहे को टोकूँ,
मोरे नैनन को भायो रे।
अलबेला सजन आयो रे॥`,
      description: "Devotional composition in Raag Bhairavi expressing the arrival of the beloved, composed by the legendary Pt. Jasraj."
    },
    converted: {
      notation: `Key: C Phrygian Dominant (Bhairavi approximation)
Scale: C Db E F G Ab Bb C
Time Signature: 16/4

Sthayi:
C  Db  E  F  G  Ab  Bb  C' - Al-be-la sa-jan aa-yo re
G  F  E  Db  C - Mo-re an-ga-na aa-yo re

Antara:
E  F  G  Ab  Bb  C' - Ka-he ko ro-kun
Bb Ab G F E Db - Ka-he ko to-kun
C Db E F G - Mo-re nai-nan ko bha-yo re`,
      description: "Phrygian Dominant scale captures Bhairavi's characteristic b2 and b6. The emotional devotional quality is preserved through the scale choice."
    }
  }
};

const CompositionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const composition = compositionData[id || "1"] || compositionData["1"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Navigation />
      
      <main className="pt-20 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate("/search")}
            className="mb-6 gap-2 animate-fade-in"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Search
          </Button>

          {/* Header Card */}
          <Card className="mb-8 shadow-elegant animate-scale-in border-2 bg-gradient-card">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-gradient-hero flex items-center justify-center">
                    <Music2 className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl md:text-4xl mb-3">{composition.name}</CardTitle>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-sm">{composition.style}</Badge>
                      <Badge className="text-sm">{composition.tempo}</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Raag</p>
                  <p className="text-lg font-semibold text-primary">{composition.raag}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Taal</p>
                  <p className="text-lg font-semibold">{composition.taal}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Composer</p>
                  <p className="text-lg font-semibold">{composition.composer}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Western Scale</p>
                  <p className="text-lg font-semibold text-accent">{composition.scale}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notation Tabs */}
          <Tabs defaultValue="original" className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <TabsList className="grid w-full grid-cols-2 h-auto p-1 mb-6">
              <TabsTrigger value="original" className="gap-2 py-3 text-base">
                <FileText className="w-4 h-4" />
                Original (Indian)
              </TabsTrigger>
              <TabsTrigger value="converted" className="gap-2 py-3 text-base">
                <Music2 className="w-4 h-4" />
                Converted (Western)
              </TabsTrigger>
            </TabsList>

            <TabsContent value="original" className="mt-0">
              <Card className="shadow-card border-2">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">Indian Classical Notation</CardTitle>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="w-4 h-4" />
                      Export
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="bg-muted/30 rounded-lg p-6 mb-6">
                    <pre className="font-mono text-lg leading-relaxed whitespace-pre-wrap text-foreground">
                      {composition.original.notation}
                    </pre>
                  </div>
                  <div className="bg-accent/10 border-l-4 border-accent p-4 rounded">
                    <p className="text-muted-foreground leading-relaxed">
                      {composition.original.description}
                    </p>
                  </div>
                  
                  {/* Musical Information */}
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-gradient-card">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Traditional Details</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Raag:</span>
                          <span className="font-semibold">{composition.raag}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Taal:</span>
                          <span className="font-semibold">{composition.taal}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Style:</span>
                          <span className="font-semibold">{composition.style}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="converted" className="mt-0">
              <Card className="shadow-card border-2">
                <CardHeader className="bg-gradient-to-r from-accent/5 to-primary/5">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">Western Musical Notation</CardTitle>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="w-4 h-4" />
                      Export
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="bg-muted/30 rounded-lg p-6 mb-6">
                    <pre className="font-mono text-lg leading-relaxed whitespace-pre-wrap text-foreground">
                      {composition.converted.notation}
                    </pre>
                  </div>
                  <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
                    <p className="text-muted-foreground leading-relaxed">
                      {composition.converted.description}
                    </p>
                  </div>

                  {/* Musical Information */}
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-gradient-card">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Western Details</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Scale:</span>
                          <span className="font-semibold">{composition.scale}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Time Signature:</span>
                          <span className="font-semibold">{composition.timeSignature}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Tempo:</span>
                          <span className="font-semibold">{composition.tempo}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default CompositionDetail;
