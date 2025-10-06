import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const raagData = [
  { name: "Yaman", count: 45 },
  { name: "Bhairav", count: 38 },
  { name: "Bhairavi", count: 42 },
  { name: "Todi", count: 28 },
  { name: "Marwa", count: 25 },
  { name: "Puriya", count: 22 },
];

const taalData = [
  { name: "Teentaal", value: 120 },
  { name: "Jhaptaal", value: 45 },
  { name: "Ektaal", value: 38 },
  { name: "Roopak", value: 30 },
  { name: "Keherwa", value: 25 },
];

const COLORS = ["hsl(25, 95%, 53%)", "hsl(355, 75%, 35%)", "hsl(45, 90%, 55%)", "hsl(25, 80%, 45%)", "hsl(35, 85%, 50%)"];

export const Dashboard = () => {
  return (
    <section id="dashboard" className="min-h-screen py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Statistical Dashboard</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive analysis of raagas, taals, and composition patterns
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="shadow-card animate-slide-in">
            <CardHeader>
              <CardTitle className="text-2xl">Compositions by Raag</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
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

          <Card className="shadow-card animate-slide-in" style={{ animationDelay: "0.1s" }}>
            <CardHeader>
              <CardTitle className="text-2xl">Distribution by Taal</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={taalData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {taalData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)"
                    }} 
                  />
                  <Legend />
                </PieChart>
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
    </section>
  );
};
