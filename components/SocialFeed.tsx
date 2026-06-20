'use client';

import { useEffect, useMemo, useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from 'react-icons/fa6';

type SocialPost = {
  id: string;
  platform: string;
  content: string;
  image?: string;
  link: string;
  date: string;
  engagement: {
    likes: number;
    comments: number;
    shares: number;
  };
};

export default function SocialFeed() {
  const [posts, setPosts] = useState<SocialPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activePlatform, setActivePlatform] = useState('all');

  useEffect(() => {
    let mounted = true;

    const fetchSocialPosts = async () => {
      try {
        const response = await fetch('/api/social', { cache: 'no-store' });
        await response.json();

        if (!mounted) return;

        setPosts([
          {
            id: '1',
            platform: 'facebook',
            content: '🚀 Exciting update from FORTIS INVICTA! We are expanding our renewable energy solutions across The Gambia.',
            link: 'https://facebook.com/...',
            date: new Date().toISOString(),
            engagement: { likes: 45, comments: 12, shares: 8 },
          },
          {
            id: '2',
            platform: 'instagram',
            content: '🌱 Our Smart Agriculture project is transforming food security in the Central River Region.',
            image: '/images/social/instagram-post.jpg',
            link: 'https://instagram.com/...',
            date: new Date().toISOString(),
            engagement: { likes: 128, comments: 23, shares: 15 },
          },
          {
            id: '3',
            platform: 'x',
            content: '📊 FORTISOS platform launches new features for renewable energy monitoring. #FortisOS #RenewableEnergy',
            link: 'https://x.com/...',
            date: new Date().toISOString(),
            engagement: { likes: 67, comments: 8, shares: 14 },
          },
        ]);
      } catch {
        if (mounted) setPosts([]);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchSocialPosts();

    return () => {
      mounted = false;
    };
  }, []);

  const platforms = useMemo(
    () => [
      { key: 'all', label: 'All', icon: null },
      { key: 'facebook', label: 'Facebook', icon: FaFacebook },
      { key: 'instagram', label: 'Instagram', icon: FaInstagram },
      { key: 'x', label: 'X', icon: FaXTwitter },
      { key: 'youtube', label: 'YouTube', icon: FaYoutube },
      { key: 'linkedin', label: 'LinkedIn', icon: FaLinkedin },
    ],
    []
  );

  const filteredPosts = activePlatform === 'all' ? posts : posts.filter((post) => post.platform === activePlatform);

  const getPlatformColor = (platform: string) => {
    const colors: Record<string, string> = {
      facebook: 'bg-[#1877F2]',
      instagram: 'bg-[#E4405F]',
      x: 'bg-[#000000]',
      youtube: 'bg-[#FF0000]',
      linkedin: 'bg-[#0A66C2]',
    };

    return colors[platform] || 'bg-gray-600';
  };

  const getPlatformIcon = (platform: string) => {
    const icons: Record<string, typeof FaFacebook> = {
      facebook: FaFacebook,
      instagram: FaInstagram,
      x: FaXTwitter,
      youtube: FaYoutube,
      linkedin: FaLinkedin,
    };

    return icons[platform] || FaFacebook;
  };

  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-green-600" />
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h3 className="text-xl font-bold text-gray-900">Latest from Social Media</h3>
        <div className="flex flex-wrap gap-2">
          {platforms.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActivePlatform(key)}
              className={`rounded-full px-3 py-1 text-sm transition ${activePlatform === key ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {Icon && <Icon className="mr-1 inline" size={14} />}
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredPosts.map((post) => {
          const Icon = getPlatformIcon(post.platform);

          return (
            <div key={post.id} className="rounded-lg border border-gray-100 p-4 transition hover:shadow-md">
              <div className="flex items-start gap-3">
                <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${getPlatformColor(post.platform)} text-white`}>
                  <Icon size={16} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-medium capitalize">{post.platform}</span>
                    <span className="text-xs text-gray-400">{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <p className="mt-1 text-gray-700">{post.content}</p>
                  {post.image && <img src={post.image} alt="Post image" className="mt-2 max-h-48 w-full rounded-lg object-cover" />}
                  <div className="mt-2 flex gap-4 text-sm text-gray-500">
                    <span>❤️ {post.engagement.likes}</span>
                    <span>💬 {post.engagement.comments}</span>
                    <span>🔄 {post.engagement.shares}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredPosts.length === 0 && <p className="py-8 text-center text-gray-500">No posts to display</p>}
    </div>
  );
}
