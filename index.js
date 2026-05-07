// users.js
// Recipe sharing website — Dishly
// Plain JavaScript user base, no database required
// Import with: const { users, getUserById, getUserByUsername, getUsersByRole } = require('./users');

const users = [
    {
        id: 1,
        username: 'laura_montoya',
        full_name: 'Laura Montoya',
        email: 'laura.montoya@example.com',
        password: 'hashed_password_01', // use bcrypt in a real app
        bio: 'Mexican home cook obsessed with salsas and tamales. Cooking since age 7!',
        avatar_url: 'https://example.com/avatars/laura.jpg',
        location: 'Mexico City, MX',
        role: 'top_chef',
        dietary_preference: 'omnivore',
        favorite_cuisine: 'Mexican',
        recipes_count: 2100,
        followers_count: 18400,
        following_count: 320,
        is_verified: true,
        is_active: true,
        joined_at: '2022-03-15',
    },
    {
        id: 2,
        username: 'arjun_kapoor',
        full_name: 'Arjun Kapoor',
        email: 'arjun.kapoor@example.com',
        password: 'hashed_password_02',
        bio: 'Vegan chef from Mumbai. Proving that plant-based food can be bold and delicious.',
        avatar_url: 'https://example.com/avatars/arjun.jpg',
        location: 'Mumbai, IN',
        role: 'eco_hero',
        dietary_preference: 'vegan',
        favorite_cuisine: 'Indian',
        recipes_count: 1800,
        followers_count: 15200,
        following_count: 210,
        is_verified: true,
        is_active: true,
        joined_at: '2022-07-22',
    },
    {
        id: 3,
        username: 'sophie_chen',
        full_name: 'Sophie Chen',
        email: 'sophie.chen@example.com',
        password: 'hashed_password_03',
        bio: 'French pastry lover based in Lyon. Croissants, macarons, and everything buttery.',
        avatar_url: 'https://example.com/avatars/sophie.jpg',
        location: 'Lyon, FR',
        role: 'dessert_queen',
        dietary_preference: 'vegetarian',
        favorite_cuisine: 'French',
        recipes_count: 1500,
        followers_count: 12800,
        following_count: 175,
        is_verified: true,
        is_active: true,
        joined_at: '2023-01-10',
    },
    {
        id: 4,
        username: 'marco_bellini',
        full_name: 'Marco Bellini',
        email: 'marco.bellini@example.com',
        password: 'hashed_password_04',
        bio: 'Italian home cook from Bologna. Nonna taught me everything. Pasta is life.',
        avatar_url: 'https://example.com/avatars/marco.jpg',
        location: 'Bologna, IT',
        role: 'pasta_master',
        dietary_preference: 'omnivore',
        favorite_cuisine: 'Italian',
        recipes_count: 1300,
        followers_count: 9600,
        following_count: 140,
        is_verified: false,
        is_active: true,
        joined_at: '2023-04-05',
    },
    {
        id: 5,
        username: 'yuki_tanaka',
        full_name: 'Yuki Tanaka',
        email: 'yuki.tanaka@example.com',
        password: 'hashed_password_05',
        bio: 'Japanese cuisine enthusiast. Ramen, sushi, and everything umami.',
        avatar_url: 'https://example.com/avatars/yuki.jpg',
        location: 'Tokyo, JP',
        role: 'home_cook',
        dietary_preference: 'pescatarian',
        favorite_cuisine: 'Japanese',
        recipes_count: 870,
        followers_count: 6300,
        following_count: 95,
        is_verified: false,
        is_active: true,
        joined_at: '2023-06-18',
    },
    {
        id: 6,
        username: 'amara_diallo',
        full_name: 'Amara Diallo',
        email: 'amara.diallo@example.com',
        password: 'hashed_password_06',
        bio: 'West African flavors, modern twists. Bringing jollof rice to the world stage.',
        avatar_url: 'https://example.com/avatars/amara.jpg',
        location: 'Dakar, SN',
        role: 'home_cook',
        dietary_preference: 'omnivore',
        favorite_cuisine: 'West African',
        recipes_count: 640,
        followers_count: 4100,
        following_count: 88,
        is_verified: false,
        is_active: true,
        joined_at: '2023-09-01',
    },
    {
        id: 7,
        username: 'carlos_reyes',
        full_name: 'Carlos Reyes',
        email: 'carlos.reyes@example.com',
        password: 'hashed_password_07',
        bio: 'BBQ pitmaster from Texas. Low and slow is the only way to go.',
        avatar_url: 'https://example.com/avatars/carlos.jpg',
        location: 'Austin, TX, US',
        role: 'pro_chef',
        dietary_preference: 'omnivore',
        favorite_cuisine: 'American BBQ',
        recipes_count: 980,
        followers_count: 11200,
        following_count: 60,
        is_verified: true,
        is_active: true,
        joined_at: '2022-11-30',
    },
    {
        id: 8,
        username: 'nina_hoffman',
        full_name: 'Nina Hoffman',
        email: 'nina.hoffman@example.com',
        password: 'hashed_password_08',
        bio: 'Nutritionist and gluten-free baker. Making healthy food taste incredible.',
        avatar_url: 'https://example.com/avatars/nina.jpg',
        location: 'Berlin, DE',
        role: 'nutritionist',
        dietary_preference: 'gluten_free',
        favorite_cuisine: 'Mediterranean',
        recipes_count: 430,
        followers_count: 3800,
        following_count: 112,
        is_verified: true,
        is_active: true,
        joined_at: '2024-02-14',
    },
    {
        id: 9,
        username: 'priya_nair',
        full_name: 'Priya Nair',
        email: 'priya.nair@example.com',
        password: 'hashed_password_09',
        bio: 'Kerala spice queen. Every dish tells a story from the south of India.',
        avatar_url: 'https://example.com/avatars/priya.jpg',
        location: 'Kochi, IN',
        role: 'home_cook',
        dietary_preference: 'vegetarian',
        favorite_cuisine: 'South Indian',
        recipes_count: 760,
        followers_count: 5500,
        following_count: 200,
        is_verified: false,
        is_active: true,
        joined_at: '2023-11-20',
    },
    {
        id: 10,
        username: 'tom_walsh',
        full_name: 'Tom Walsh',
        email: 'tom.walsh@example.com',
        password: 'hashed_password_10',
        bio: 'Weekend griller and craft beer pairer. Dad, cook, eternal learner.',
        avatar_url: 'https://example.com/avatars/tom.jpg',
        location: 'Dublin, IE',
        role: 'home_cook',
        dietary_preference: 'omnivore',
        favorite_cuisine: 'American',
        recipes_count: 210,
        followers_count: 980,
        following_count: 430,
        is_verified: false,
        is_active: false,
        joined_at: '2024-05-03',
    },
];

// --- Helper functions ---

// Get a single user by ID
function getUserById(id) {
    return users.find((user) => user.id === id) || null;
}

// Get a single user by username
function getUserByUsername(username) {
    return users.find((user) => user.username === username) || null;
}

// Get all users with a specific role
function getUsersByRole(role) {
    return users.filter((user) => user.role === role);
}

// Get all active users
function getActiveUsers() {
    return users.filter((user) => user.is_active);
}

// Get all verified users
function getVerifiedUsers() {
    return users.filter((user) => user.is_verified);
}

// Get users by dietary preference
function getUsersByDiet(preference) {
    return users.filter((user) => user.dietary_preference === preference);
}

// Get top users sorted by followers
function getTopUsers(limit = 5) {
    return [...users]
        .sort((a, b) => b.followers_count - a.followers_count)
        .slice(0, limit);
}

module.exports = {
    users,
    getUserById,
    getUserByUsername,
    getUsersByRole,
    getActiveUsers,
    getVerifiedUsers,
    getUsersByDiet,
    getTopUsers,
};
