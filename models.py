from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime, Text
from sqlalchemy.orm import relationship
from datetime import datetime
from database import Base

class Room(Base):
    __tablename__ = "rooms"

    id = Column(String, primary_key=True, index=True)
    name = Column(String)
    host_name = Column(String)  # Simple string instead of foreign key to user
    language = Column(String, default="Python")
    code = Column(Text, default="")
    created_at = Column(DateTime, default=datetime.utcnow)
    max_users = Column(Integer, default=10)
    is_public = Column(Boolean, default=True)
    
    # Relationships
    messages = relationship("ChatMessage", back_populates="room", cascade="all, delete-orphan")

class ChatMessage(Base):
    __tablename__ = "chat_messages"

    id = Column(String, primary_key=True, index=True)
    room_id = Column(String, ForeignKey("rooms.id"))
    username = Column(String)  # Display name at time of message
    message = Column(Text)
    timestamp = Column(DateTime, default=datetime.utcnow)

    # Relationships
    room = relationship("Room", back_populates="messages")
