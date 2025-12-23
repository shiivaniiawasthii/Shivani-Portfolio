
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, TreePalm } from 'lucide-react';
import travel from "../../assets/travel.jpeg";


export function FunCard() {
  const [visible, setVisible] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setShowButton(true);
        // Auto-show on first scroll only if not manually toggled yet
        if (!visible && sessionStorage.getItem('funCardShown') !== 'true') {
          setVisible(true);
          sessionStorage.setItem('funCardShown', 'true');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visible]);

  const handleToggle = () => {
    setVisible(!visible);
  };

  const handleDismiss = () => {
    setVisible(false);
  };

  return (
    <>
      {/* Toggle Button */}
      <AnimatePresence>
        {showButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={handleToggle}
            className="fixed bottom-8 left-8 z-40 w-14 h-14 bg-gradient-to-br from-rose-400 to-blue-400 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform"
            title={visible ? 'Hide fun card' : 'Show fun card'}
          >
            <TreePalm size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Fun Card */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-8 right-8 z-40 max-w-xs"
          >
            <div className="bg-gradient-to-br from-rose-400 to-blue-400 rounded-2xl shadow-2xl p-6 text-white relative overflow-hidden">
              <button
                onClick={handleDismiss}
                className="absolute top-3 right-3 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
              >
                <X size={16} />
              </button>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <TreePalm size={24} />
                </div>
                <h3 className="text-xl">Balance Matters</h3>
              </div>

              <p className="text-white/90 mb-4">
                I deliver the work. Then I chill — travel, explore, recharge. 
                Quality output needs quality breaks. 🌴
              </p>

             <div className="w-full  bg-white/10 rounded-lg overflow-hidden">
  <img
    src={travel}
    alt="Me chilling"
    className="w-full h-full object-cover"
  />
</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}