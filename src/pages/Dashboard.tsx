import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const raagData = [
  { name: "Yaman", count: 45 },
  { name: "Bhairav", count: 38 },
  { name: "Bhairavi", count: 42 },
  { name: "Todi", count: 28 },
  { name: "Marwa", count: 25 },
  { name: "Puriya", count: 22 },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20 pb-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Statistical Dashboard</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive analysis of raagas, taals, and composition patterns
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-8 max-w-4xl mx-auto">
            <Card className="shadow-card animate-slide-in">
              <CardHeader>
                <CardTitle className="text-2xl">Compositions by Raag</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={raagData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" stroke="hsl(var(--foreground))" />
                    <YAxis stroke="hsl(var(--foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "var(--radius)"
                      }} 
                    />
                    <Bar dataKey="count" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-scale-in">
            <Card className="shadow-card bg-gradient-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Bandishes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">258</div>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-gradient-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Unique Raagas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-secondary">42</div>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-gradient-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Composers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-accent">18</div>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-gradient-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Taals Used</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">12</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
