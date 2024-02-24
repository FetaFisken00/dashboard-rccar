'use client'
import React, { useState } from 'react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

export function AlertComponent() {
  const [showAlert, setShowAlert] = useState(true);

  const triggerAlert = () => {
      setTimeout(() => {
          setShowAlert(false);
      }, 1000);
  }

  return (
      <div style={{position: 'relative', zIndex: 1000}}>
          {showAlert && (
              <Alert variant='destructive' onClick={triggerAlert}>
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>This is an error alert — check it out!</AlertDescription>
              </Alert>
          )}
      </div>
  );
}