import React from "react";
type IconType = 'favorite_border' | 'favorite';

interface HeartSwitchProps {
    icon: IconType;
    onSwitch: () => void;
}

export function HeartSwitch({ icon, onSwitch }: HeartSwitchProps) {

    return (   
          <span className="heart-btn material-icons" onClick={onSwitch}>{icon}</span>
      );
  }