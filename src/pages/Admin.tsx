import React, { useState, useEffect } from "react";
import { useContent } from "../context/ContentContext";
import { Save, LogOut, LayoutDashboard, Eye, EyeOff, Video, Type, Image as ImageIcon } from "lucide-react";

export function Admin() {
  const { content, refreshContent } = useContent();
  const [token, setToken] = useState<string | null>(localStorage.getItem("admin_token"));
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [editedContent, setEditedContent] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("general");

  useEffect(() => {
    if (content) {
      setEditedContent(content);
    }
  }, [content]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("admin_token", data.token);
        setToken(data.token);
        setError("");
      } else {
        setError("Invalid password");
      }
    } catch (err) {
      setError("Login failed");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    setToken(null);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(editedContent),
      });

      if (res.ok) {
        await refreshContent();
        alert("Content saved successfully!");
      } else if (res.status === 401 || res.status === 403) {
        handleLogout();
        alert("Session expired. Please login again.");
      } else {
        alert("Failed to save content");
      }
    } catch (err) {
      alert("Error saving content");
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (key: string, value: string) => {
    setEditedContent(prev => ({ ...prev, [key]: value }));
  };

  const toggleVisibility = (key: string) => {
    const currentValue = editedContent[key] === "true";
    handleChange(key, currentValue ? "false" : "true");
  };

  if (!token) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050505] p-4 text-white">
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-zinc-900 p-8 shadow-2xl">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold">Admin Login</h1>
            <p className="text-sm text-zinc-400">Enter password to access CMS</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  const renderInput = (key: string, label: string, type: "text" | "textarea" | "image" | "video" = "text") => {
    return (
      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-zinc-300">{label}</label>
        {type === "textarea" ? (
          <textarea
            value={editedContent[key] || ""}
            onChange={(e) => handleChange(key, e.target.value)}
            rows={4}
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
          />
        ) : (
          <div className="relative">
            {type === "image" && <ImageIcon className="absolute left-3 top-3.5 text-zinc-500" size={18} />}
            {type === "video" && <Video className="absolute left-3 top-3.5 text-zinc-500" size={18} />}
            {type === "text" && <Type className="absolute left-3 top-3.5 text-zinc-500" size={18} />}
            <input
              type="text"
              value={editedContent[key] || ""}
              onChange={(e) => handleChange(key, e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 pl-10 text-white focus:border-blue-500 focus:outline-none"
            />
          </div>
        )}
      </div>
    );
  };

  const renderVisibilityToggle = (key: string, label: string) => {
    const isVisible = editedContent[key] === "true";
    return (
      <div className="mb-4 flex items-center justify-between rounded-xl border border-white/5 bg-zinc-900/50 p-4">
        <span className="font-medium text-white">{label}</span>
        <button
          onClick={() => toggleVisibility(key)}
          className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            isVisible ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"
          }`}
        >
          {isVisible ? <><Eye size={16} /> Visible</> : <><EyeOff size={16} /> Hidden</>}
        </button>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen bg-[#050505] text-white">
      {/* Sidebar */}
      <div className="w-64 shrink-0 border-r border-white/10 bg-zinc-900/50 p-6">
        <div className="mb-8 flex items-center gap-2">
          <LayoutDashboard className="text-blue-500" />
          <span className="text-xl font-bold">Admin CMS</span>
        </div>
        
        <nav className="space-y-2">
          {[
            { id: "general", label: "General Content" },
            { id: "global", label: "Global Settings" },
            { id: "images", label: "Global Image Management" },
            { id: "icons", label: "Icons & Images" },
            { id: "team", label: "Team Management" },
            { id: "testimonials", label: "Testimonials" },
            { id: "social", label: "Social Media Links" },
            { id: "videos", label: "Video Management" },
            { id: "visibility", label: "Section Visibility" },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                activeTab === tab.id ? "bg-blue-600 text-white" : "text-zinc-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <button
          onClick={handleLogout}
          className="mt-auto flex w-full items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-red-400 hover:bg-red-500/10"
          style={{ marginTop: "calc(100vh - 300px)" }}
        >
          <LogOut size={18} /> Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold capitalize">
              {activeTab.replace("-", " ")} Management
            </h2>
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
            >
              <Save size={18} /> {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6 shadow-xl">
            {activeTab === "general" && (
              <div className="space-y-8">
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-blue-400 border-b border-white/10 pb-2">Hero Section</h3>
                  {renderInput("home.hero.title", "Hero Title")}
                  {renderInput("home.hero.subtitle", "Hero Subtitle", "textarea")}
                </div>
                
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-blue-400 border-b border-white/10 pb-2">About Section</h3>
                  {renderInput("home.about.title", "About Title")}
                  {renderInput("home.about.text1", "About Paragraph 1", "textarea")}
                  {renderInput("home.about.text2", "About Paragraph 2", "textarea")}
                  {renderInput("home.about.image", "About Image URL", "image")}
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-semibold text-blue-400 border-b border-white/10 pb-2">Leadership Section</h3>
                  {renderInput("home.leadership.title", "Section Title")}
                  {renderInput("home.leadership.name", "CEO Name")}
                  {renderInput("home.leadership.role", "CEO Role")}
                  {renderInput("home.leadership.text", "CEO Description", "textarea")}
                  {renderInput("home.leadership.image", "CEO Image URL", "image")}
                </div>
              </div>
            )}

            {activeTab === "global" && (
              <div className="space-y-6">
                <p className="text-sm text-zinc-400 mb-6">Manage global settings like the website logo.</p>
                {renderInput("global.logo", "Website Logo URL", "image")}
              </div>
            )}

            {activeTab === "images" && (
              <div className="space-y-6">
                <p className="text-sm text-zinc-400 mb-6">Manage global images and backgrounds across the website.</p>
                <div className="space-y-8">
                  <div>
                    <h3 className="mb-4 text-lg font-semibold text-blue-400 border-b border-white/10 pb-2">Hero & Backgrounds</h3>
                    {renderInput("image.hero.bg", "Hero Background Image URL", "image")}
                  </div>
                  <div>
                    <h3 className="mb-4 text-lg font-semibold text-blue-400 border-b border-white/10 pb-2">Featured Projects</h3>
                    {renderInput("image.project1", "Featured Project 1 Image URL", "image")}
                    {renderInput("image.project2", "Featured Project 2 Image URL", "image")}
                    {renderInput("image.project3", "Featured Project 3 Image URL", "image")}
                  </div>
                  <div>
                    <h3 className="mb-4 text-lg font-semibold text-blue-400 border-b border-white/10 pb-2">Other Sections</h3>
                    {renderInput("home.about.image", "Home About Section Image URL", "image")}
                    {renderInput("home.leadership.image", "Leadership Section Image URL", "image")}
                    {renderInput("image.about.office1", "About Page Office Image 1 URL", "image")}
                    {renderInput("image.about.office2", "About Page Office Image 2 URL", "image")}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "social" && (
              <div className="space-y-6">
                <p className="text-sm text-zinc-400 mb-6">Update URLs for your social media platforms.</p>
                {renderInput("social.facebook", "Facebook URL")}
                {renderInput("social.instagram", "Instagram URL")}
                {renderInput("social.linkedin", "LinkedIn URL")}
                {renderInput("social.twitter", "Twitter URL")}
                {renderInput("social.messenger", "WhatsApp / Messenger URL")}
              </div>
            )}

            {activeTab === "icons" && (
              <div className="space-y-6">
                <p className="text-sm text-zinc-400 mb-6">Replace default icons with your custom image URLs or SVGs.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {renderInput("icon.service.1", "Service 1 Icon URL", "image")}
                  {renderInput("icon.service.2", "Service 2 Icon URL", "image")}
                  {renderInput("icon.service.3", "Service 3 Icon URL", "image")}
                  {renderInput("icon.service.4", "Service 4 Icon URL", "image")}
                  {renderInput("icon.service.5", "Service 5 Icon URL", "image")}
                  {renderInput("icon.service.6", "Service 6 Icon URL", "image")}
                  {renderInput("icon.service.7", "Service 7 Icon URL", "image")}
                  {renderInput("icon.service.8", "Service 8 Icon URL", "image")}
                </div>
              </div>
            )}

            {activeTab === "team" && (
              <div className="space-y-12">
                <p className="text-sm text-zinc-400 mb-6">Manage team members and their profile icons/images.</p>
                
                {["team.newYork", "team.sylhet"].map((teamKey) => {
                  let teamList: any[] = [];
                  try {
                    teamList = JSON.parse(editedContent[teamKey] || "[]");
                  } catch (e) {
                    teamList = [];
                  }

                  const updateTeamMember = (index: number, field: string, value: string) => {
                    const newList = [...teamList];
                    newList[index][field] = value;
                    handleChange(teamKey, JSON.stringify(newList));
                  };

                  return (
                    <div key={teamKey} className="space-y-4">
                      <h3 className="text-lg font-semibold text-blue-400 border-b border-white/10 pb-2 capitalize">
                        {teamKey.replace("team.", "")} Branch
                      </h3>
                      <div className="grid gap-4 sm:grid-cols-2">
                        {teamList.map((member, i) => (
                          <div key={member.id} className="rounded-xl border border-white/10 bg-black p-4">
                            <div className="mb-3 flex items-center justify-between">
                              <span className="text-xs font-bold text-zinc-500">#{member.id}</span>
                              <div className="h-10 w-10 overflow-hidden rounded-full bg-zinc-800">
                                <img
                                  src={member.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`}
                                  alt={member.name}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                            </div>
                            <div className="space-y-3">
                              <div>
                                <label className="mb-1 block text-xs text-zinc-400">Name</label>
                                <input type="text" value={member.name} onChange={(e) => updateTeamMember(i, "name", e.target.value)} className="w-full rounded-lg border border-white/10 bg-zinc-900 px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none" />
                              </div>
                              <div>
                                <label className="mb-1 block text-xs text-zinc-400">Role</label>
                                <input type="text" value={member.role} onChange={(e) => updateTeamMember(i, "role", e.target.value)} className="w-full rounded-lg border border-white/10 bg-zinc-900 px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none" />
                              </div>
                              <div>
                                <label className="mb-1 block text-xs text-zinc-400">Email</label>
                                <input type="text" value={member.email} onChange={(e) => updateTeamMember(i, "email", e.target.value)} className="w-full rounded-lg border border-white/10 bg-zinc-900 px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none" />
                              </div>
                              <div>
                                <label className="mb-1 block text-xs text-zinc-400">Icon / Image URL</label>
                                <input type="text" placeholder="Leave empty for default avatar" value={member.image || ""} onChange={(e) => updateTeamMember(i, "image", e.target.value)} className="w-full rounded-lg border border-white/10 bg-zinc-900 px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {activeTab === "testimonials" && (
              <div className="space-y-6">
                <p className="text-sm text-zinc-400 mb-6">Manage client reviews and testimonials.</p>
                {(() => {
                  let list: any[] = [];
                  try {
                    list = JSON.parse(editedContent["home.testimonials.list"] || "[]");
                  } catch (e) {
                    list = [];
                  }

                  const updateTestimonial = (index: number, field: string, value: string | number) => {
                    const newList = [...list];
                    newList[index][field] = value;
                    handleChange("home.testimonials.list", JSON.stringify(newList));
                  };

                  const addTestimonial = () => {
                    const newList = [...list, { quote: "", author: "", location: "", rating: 5, image: "" }];
                    handleChange("home.testimonials.list", JSON.stringify(newList));
                  };

                  const removeTestimonial = (index: number) => {
                    const newList = list.filter((_, i) => i !== index);
                    handleChange("home.testimonials.list", JSON.stringify(newList));
                  };

                  return (
                    <div className="space-y-6">
                      {list.map((t, i) => (
                        <div key={i} className="rounded-xl border border-white/10 bg-black p-4 relative">
                          <button 
                            onClick={() => removeTestimonial(i)}
                            className="absolute top-4 right-4 text-red-500 hover:text-red-400 text-sm font-medium"
                          >
                            Remove
                          </button>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div>
                              <label className="mb-1 block text-xs text-zinc-400">Client Name</label>
                              <input type="text" value={t.author} onChange={(e) => updateTestimonial(i, "author", e.target.value)} className="w-full rounded-lg border border-white/10 bg-zinc-900 px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none" />
                            </div>
                            <div>
                              <label className="mb-1 block text-xs text-zinc-400">Location / Role</label>
                              <input type="text" value={t.location} onChange={(e) => updateTestimonial(i, "location", e.target.value)} className="w-full rounded-lg border border-white/10 bg-zinc-900 px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none" />
                            </div>
                            <div className="md:col-span-2">
                              <label className="mb-1 block text-xs text-zinc-400">Review Text</label>
                              <textarea value={t.quote} onChange={(e) => updateTestimonial(i, "quote", e.target.value)} rows={2} className="w-full rounded-lg border border-white/10 bg-zinc-900 px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none" />
                            </div>
                            <div>
                              <label className="mb-1 block text-xs text-zinc-400">Client Photo URL</label>
                              <input type="text" value={t.image} onChange={(e) => updateTestimonial(i, "image", e.target.value)} className="w-full rounded-lg border border-white/10 bg-zinc-900 px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none" />
                            </div>
                            <div>
                              <label className="mb-1 block text-xs text-zinc-400">Rating (1-5)</label>
                              <input type="number" min="1" max="5" value={t.rating} onChange={(e) => updateTestimonial(i, "rating", parseInt(e.target.value))} className="w-full rounded-lg border border-white/10 bg-zinc-900 px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none" />
                            </div>
                          </div>
                        </div>
                      ))}
                      <button onClick={addTestimonial} className="w-full rounded-xl border border-dashed border-white/20 py-4 text-sm font-medium text-zinc-400 hover:border-white/40 hover:text-white transition-colors">
                        + Add New Review
                      </button>
                    </div>
                  );
                })()}
              </div>
            )}

            {activeTab === "videos" && (
              <div className="space-y-6">
                <p className="text-sm text-zinc-400 mb-6">Manage all video URLs across the website. Leave empty to use default images/backgrounds.</p>
                {renderInput("home.hero.video", "Hero Background Video URL (MP4)", "video")}
                {/* Add more video inputs here as needed */}
              </div>
            )}

            {activeTab === "visibility" && (
              <div className="space-y-4">
                <p className="text-sm text-zinc-400 mb-6">Toggle the visibility of entire sections on the home page.</p>
                {renderVisibilityToggle("show.home.hero", "Hero Section")}
                {renderVisibilityToggle("show.home.about", "About Section")}
                {renderVisibilityToggle("show.home.services", "Services Section")}
                {renderVisibilityToggle("show.home.projects", "Projects Section")}
                {renderVisibilityToggle("show.home.testimonials", "Testimonials Section")}
                {renderVisibilityToggle("show.home.leadership", "Leadership Section")}
                {renderVisibilityToggle("show.home.cta", "Call to Action Section")}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
