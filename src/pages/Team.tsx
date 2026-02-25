import { Mail } from "lucide-react";
import { useContent } from "../context/ContentContext";

export function Team() {
  const { content } = useContent();

  const getTeam = (key: string) => {
    try {
      return JSON.parse(content[key] || "[]");
    } catch (e) {
      return [];
    }
  };

  const newYorkTeam = getTeam("team.newYork");
  const sylhetTeam = getTeam("team.sylhet");

  return (
    <div className="flex flex-col gap-24 pb-24 pt-12">
      {/* Header */}
      <section className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
          Our Professional <span className="text-blue-500">Team</span>
        </h1>
        <div className="mx-auto mb-8 h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
        <p className="text-lg text-zinc-400 sm:text-xl">
          Behind every successful campaign at NxtEdge IT Park, there's a dynamic
          team of digital marketers, designers, developers, and creative
          strategists.
        </p>
      </section>

      {/* New York Branch */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            New York Branch
          </h2>
          <div className="h-px flex-1 bg-white/10"></div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {newYorkTeam.map((member: any) => (
            <div
              key={member.id}
              className="group rounded-2xl border border-white/5 bg-zinc-900/30 p-6 transition-all hover:border-blue-500/30 hover:bg-zinc-800/50"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-bold text-zinc-500">
                  #{member.id}
                </span>
                <div className="h-10 w-10 overflow-hidden rounded-full bg-zinc-800">
                  <img
                    src={member.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <h3 className="mb-1 text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                {member.name}
              </h3>
              <p className="mb-4 text-sm font-medium text-blue-500">
                {member.role}
              </p>
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2 text-xs text-zinc-400 hover:text-blue-300"
                >
                  <Mail size={14} />
                  <span className="truncate">{member.email}</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Sylhet Branch */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Sylhet Branch
          </h2>
          <div className="h-px flex-1 bg-white/10"></div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sylhetTeam.map((member: any) => (
            <div
              key={member.id}
              className="group rounded-2xl border border-white/5 bg-zinc-900/30 p-6 transition-all hover:border-blue-500/30 hover:bg-zinc-800/50"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-bold text-zinc-500">
                  #{member.id}
                </span>
                <div className="h-10 w-10 overflow-hidden rounded-full bg-zinc-800">
                  <img
                    src={member.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <h3 className="mb-1 text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                {member.name}
              </h3>
              <p className="mb-4 text-sm font-medium text-blue-500">
                {member.role}
              </p>
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2 text-xs text-zinc-400 hover:text-blue-300"
                >
                  <Mail size={14} />
                  <span className="truncate">{member.email}</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
