import React from 'react';
import ReactDOM from 'react-dom';
import { Moon, Sun, Code, Users, MessageCircle, Menu, X, Smartphone, Laptop, Tablet, Zap, CheckCircle } from 'lucide-react';

function EnhancedWebsite() {
    const [loading, setLoading] = React.useState(true);
    const [isDarkMode, setIsDarkMode] = React.useState(true);
    const [activeMenu, setActiveMenu] = React.useState(null);
    const [deviceView, setDeviceView] = React.useState('desktop');
    const [notifications, setNotifications] = React.useState([]);

    const addNotification = (message) => {
        const newNotification = {
            id: Date.now(),
            message,
            icon: <CheckCircle className={`${isDarkMode ? 'text-green-400' : 'text-green-500'}`} />
        };
        setNotifications(prev => [...prev, newNotification]);
        
        setTimeout(() => {
            setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
        }, 3000);
    };

    React.useEffect(() => {
        const loadingSequence = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(loadingSequence);
    }, []);

    const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-blue-50';
    const cardBg = isDarkMode ? 'bg-gray-800' : 'bg-white';
    const textColor = isDarkMode ? 'text-white' : 'text-gray-800';
    const buttonBg = isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600';
    const notifBg = isDarkMode ? 'bg-gray-800' : 'bg-white';
    const notifText = isDarkMode ? 'text-white' : 'text-gray-800';

    const getDeviceClass = () => {
        switch(deviceView) {
            case 'mobile': return 'max-w-xs h-[600px] mx-auto border-8 border-gray-300 rounded-2xl overflow-hidden';
            case 'tablet': return 'max-w-md h-[800px] mx-auto border-8 border-gray-300 rounded-2xl overflow-hidden';
            default: return 'w-full min-h-screen';
        }
    };

    const openExternalLink = (url, notificationMessage) => {
        addNotification(notificationMessage);
    };

    if (loading) {
        return (
            <div className={`fixed inset-0 ${bgColor} flex flex-col items-center justify-center`}>
                <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
                    <Zap className="w-16 h-16 text-white animate-bounce" />
                </div>
                <h2 className="mt-4 text-2xl font-bold text-blue-400">
                    Loading Main Site
                </h2>
            </div>
        );
    }

    return (
        <div className="w-full h-screen overflow-auto">
            <div className="fixed top-4 right-4 z-[100] space-y-2">
                {notifications.map(notification => (
                    <div
                        key={notification.id}
                        className={`${notifBg} ${notifText} p-4 rounded-lg shadow-lg flex items-center gap-4 notification-enter`}
                    >
                        {notification.icon}
                        <span>{notification.message}</span>
                    </div>
                ))}
            </div>

            <div className={`${bgColor} ${textColor} ${getDeviceClass()} relative transition-all duration-500 overflow-y-auto`}>
                <div className="absolute top-2 left-2 z-50 flex gap-2">
                    {[
                        { view: 'desktop', Icon: Laptop },
                        { view: 'tablet', Icon: Tablet },
                        { view: 'mobile', Icon: Smartphone }
                    ].map(({ view, Icon }) => (
                        <button 
                            key={view}
                            onClick={() => setDeviceView(view)}
                            className={`p-2 rounded ${deviceView === view ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        >
                            <Icon />
                        </button>
                    ))}
                </div>

                <div className={`fixed top-0 w-full h-20 flex justify-between items-center px-5 ${cardBg} backdrop-blur-sm z-40 shadow-lg`}>
                    <h1 className="text-xl md:text-3xl font-mono flex items-center gap-2">
                        <Zap className="text-blue-500" /> Rahm | Scripts Site
                    </h1>
                    
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={() => setIsDarkMode(!isDarkMode)} 
                            className={`p-2 rounded-full ${buttonBg} transition-all duration-300`}
                        >
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <button 
                            className="lg:hidden p-2"
                            onClick={() => setActiveMenu('mobile')}
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>

                <div className="pt-24 px-5 max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Discord",
                                icon: <MessageCircle className="w-8 h-8" />,
                                description: "Join our Discord community!",
                                action: () => openExternalLink('https://discord.gg/example', 'Opening Discord server...')
                            },
                            {
                                title: "Script Library",
                                icon: <Code className="w-8 h-8" />,
                                description: "Explore our extensive script collection!",
                                action: () => openExternalLink('https://scripts.example.com', 'Opening Script Library...')
                            },
                            {
                                title: "Roblox Group",
                                icon: <Users className="w-8 h-8" />,
                                description: "Join our Roblox group now!",
                                action: () => addNotification('Roblox Group is still in development.')
                            }
                        ].map((card) => (
                            <div 
                                key={card.title}
                                className={`${cardBg} p-6 rounded-xl flex flex-col gap-4 shadow-lg transform transition-all duration-300 hover:scale-105`}
                            >
                                <div className="flex justify-center">{card.icon}</div>
                                <h2 className="text-2xl text-center pb-4 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-0.5 after:bg-blue-500">
                                    {card.title}
                                </h2>
                                <p className="text-center text-lg">{card.description}</p>
                                <button 
                                    onClick={card.action}
                                    className={`w-full ${buttonBg} p-4 rounded-lg text
